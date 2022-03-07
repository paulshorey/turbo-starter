import { getAttributionParams, href_canonical } from 'src/functions/window';
const DEBUG1 = false; // warn - when actually sending request to analytics company
const DEBUG2 = false; // log - for helper functions, not sending anything yet

// See documentation about Mixpanel options:
// https://docs.google.com/spreadsheets/d/1xXqXaUCOuUJ4EThrkZRwTzMAlBXr3Yr7pQHR2tw2ZEU/edit#gid=0

/**
 * Track page view (whe a new route is written to browser history)
 * @param {object} options
 * @param {string} options.name - name of the page
 * @param {object} options.path - route of the page, relative to the site, starting with slash
 * @param {object} options.postSlug - slug of the post, if any
 * @param {object} options.categorySlug - slug of the category, if any
 * @param {object} options.experiments - experiments in the page
 */
export const analytics_track_page = function (options) {
  // Mixpanel
  let label = 'Page View - ' + options.name;
  mixpanel_add_to_queue({ label, options });
  if (typeof window !== 'object') return;
  if (!window.gtag) {
    console.error('!window.gtag');
  }
  // Google Analytics
  // GA4 may track SPA route changes automatically? See:
  // https://www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/
  if (DEBUG1) {
    console.warn('gtag track pageview', {
      page_title: options.name,
      page_path: options.path,
    });
  }
};

/**
 * Track the "Sign up" or "Download our app" button click
 * @param {object} options
 * @param {string} options.from - where in the site the button was clicked
 */
export const analytics_track_cta = function (options) {
  let label = 'CTA download app';
  mixpanel_add_to_queue({ label, options });
  // track Facebook
  if (typeof window === 'object' && window.fbq) {
    console.log('tracking Facebook Lead click');
    window.fbq('track', 'Lead');
  }
  // track in TikTok
  if (typeof window === 'object' && window.ttq) {
    window.ttq.track('ClickButton');
  }
};

/**
 * Track all link clicks
 * Navigating to a page ("/" internal), or external ("https://..."), and even hash links ("#...")
 * @param {object} options
 * @param {string} options.type - type of the link, internal or external
 * @param {string} options.href - href of the link
 * @param {string} options.fromSection - where in the site the link was clicked
 * @param {string} options.fromPageName - name of the page where the link was clicked
 * @param {string} options.fromPagePath - route of the page where the link was clicked
 */
export const analytics_track_link = function (options = {}) {
  let label = 'link click';
  // format href
  options.type = href_type(options.href);
  options.href = href_canonical(options.href); // use canonical url format
  // is CTA
  if (options.href.includes('1526316317') || options.href.includes('/auth/register')) {
    if (!options.from) {
      options.from = 'link';
    }
    analytics_track_cta(options);
    return;
  }
  // is contact, track in TikTok
  if (options.href.includes('mailto:') || options.href.includes('tel:')) {
    if (typeof window === 'object' && window.ttq) {
      window.ttq.track('Contact');
    }
  }
  // track in Mixpanel
  mixpanel_add_to_queue({ label, options });
};

/**
 * Used for tracking random stuff not covered by above functions
 * (like a status of a user's interaction in PartnerForm)
 * @param {string} label - name of the event
 * @param {object} options - options properties
 */
export const analytics_track = function (label, options) {
  if (typeof window !== 'object' || !window.mixpanel || !window.mixpanel || !window.mixpanel.track)
    return;
  mixpanel_add_to_queue({ label, options });
};

/*
 *
 * PRIVATE LIBRARY FOR MIXPANEL ONLY:
 *
 */
const mixpanel_track_event_now = function ({ label, options }) {
  if (!label || !options) return;
  if (DEBUG1) console.warn('mixpanel track "' + label + '"', options);
  window.mixpanel.track(label, options);
};

const mixpanel_track_all_from_queue = function () {
  if (window.analytics_queue.length) {
    if (DEBUG2) console.log('mixpanel_track_all_from_queue');
    for (let event of window.analytics_queue) {
      mixpanel_track_event_now(event);
    }
  }
};

const mixpanel_track_one_from_queue = function () {
  if (window.analytics_queue.length) {
    if (DEBUG2) console.log('mixpanel_track_one_from_queue');
    mixpanel_track_event_now(window.analytics_queue.shift());
  }
};

const mixpanel_add_to_queue = function ({ label, options = {} }) {
  if (typeof window !== 'object' || !window.mixpanel) {
    if (typeof window === 'object') console.warn('!window.mixpanel');
  }
  if (DEBUG2) console.log('mixpanel_add_to_queue');
  // init
  if (!window.analytics_queue || !window.analytics_interval) {
    window.analytics_queue = [];
    window.analytics_interval = setInterval(mixpanel_track_one_from_queue, 1000);
    // beforeunload unfortunately does not work ever on most browsers. On some it might fire occasionally?
    window.document.addEventListener('beforeunload', function () {
      // track the browser close event
      mixpanel_track_all_from_queue();
      mixpanel_track_event_now({
        label: 'exit',
        options: { untracked_events: window.analytics_queue.length },
      });
    });
  }
  // options to track?
  let qs = getAttributionParams();
  options.referralCode = qs.referralCode;
  options.referralId = qs.referralId;
  options.refId = qs.refId;
  options.pid = qs.pid;
  options.c = qs.c;
  // cleanup options
  for (let key in options) {
    if (options[key] === null || options[key] === undefined) {
      delete options[key];
    }
  }
  // track
  if (window.analytics_queue.length === 0) {
    // no need to wait for previous event, because it happened over 1 sec ago
    mixpanel_track_event_now({ label, options });
    analytics_queue.push({});
  } else {
    // if events are being created faster than one second, slow down to max 1 sec per event
    analytics_queue.push({ label, options });
  }
};

const href_type = function (href) {
  let prefix = 'page';
  if (href.substring(0, 1) === '#') {
    prefix = 'hashtag';
  } else if (href.substring(0, 4) === 'http') {
    prefix = 'external';
  } else if (href.substring(0, 7) === 'mailto:' || href.substring(0, 4) === 'tel:') {
    prefix = 'contact';
  }
  return prefix;
};
