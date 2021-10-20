# Privacy

## Disable telemetry
Change `browser.newtabpage.activity-stream.feeds.telemetry` to **false**  
Change `browser.ping-centre.telemetry` to **false**    
Change `browser.tabs.crashReporting.sendReport` to **false**  
Change `devtools.onboarding.telemetry.logged` to **false**  
Change `toolkit.telemetry.enabled` to **false**  
Delete the URL for `toolkit.telemetry.server`, and leave it empty    
Change `toolkit.telemetry.unified` to **false**  

## Disable Pocket
Change `browser.newtabpage.activity-stream.section.highlights.includePocket` to **false**  
Change `extensions.pocket.enabled` to **false**  
If you don't use Pocket, or you don't want Firefox's Pocket integration, you can make these changes.

## Disable prefetching [L1]
Change `network.dns.disablePrefetch` to **true**  
Change `network.prefetch-next` to **false**  

Even though prefetching may speed things up a bit, it may connect to servers without user intervention (which can be a privacy issue) and its performance benefits are minimal. Making these changes will disable prefetching:  


## Disable JavaScript in PDF
To disable JavaScript support in PDF documents, change ``pdfjs.enableScripting`` to **false**

Firefox 88 introduced the ability to execute JavaScript in PDF documents. While there are legitimate uses for JavaScript in PDF (such as form validation), such uses are not very common. In addition, it could be used for malicious purposes, so it's generally a good idea to disable this feature.  

## Harden SSL preferences
Change `security.ssl3.rsa_des_ede3_sha` to **false**   
Change `security.ssl.require_safe_negotiation` to **true**  
Making these changes will disable insecure SSL ciphers and force safe negotiation

***

# UX

## Make Firefox use Windows Notifications to deliver its notifications
Set `alerts.useSystemBackend` to **true**

# Contributions
- [Chris' Firefox hardening guide](https://chrisx.xyz/blog/yet-another-firefox-hardening-guide/)

# Related 
- [Awesome Firefox Addons](https://github.com/pratyakshm/awesome_firefox_addons) is a list of Firefox addons I use that make the Internet experience better.
