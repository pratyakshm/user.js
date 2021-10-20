// PRIVACY

// Disable Telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false);

// Disable Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("extensions.pocket.enabled", false);

// Disable Prefetching [L1]
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);

// Disable JavaScript in PDF files
user_pref("pdfjs.enableScripting", false);

// Harden SSL Preferences
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl.require_safe_negotiation", true);

// UX

// Use OS's backend for notification delivery
user_pref("alerts.useSystemBackend", true);
