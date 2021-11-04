// PRIVACY

// Disable Telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false)
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);

// Disable studies and Normandy/Shield
user_pref("datareporting.policy.dataSubmissionEnable", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Crash reports are left as is / not disabled

// Disable activity on new tab pages
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtab.preload", true);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("extensions.pocket.enabled", false);

// Disable safe browsing
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// Set Language
user_pref("intl.accept_languages", "en-US, en")

// Disable auto update
user_pref("app.update.background.scheduling.enabled", false);

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

// Show compact mode option in density
user_pref("browser.compactmode.show", true);
