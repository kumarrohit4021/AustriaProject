window.tarteaucitron_blacklist = [];
var tarteaucitronMagic = "",
    tarteaucitron_services = [],
    tarteaucitronForceCDN = "https://cdn.tarteaucitron.io/";
tarteaucitron_services["/nofingerprintforthisservice/"] = 'gcmanalyticsstorage';
window.tarteaucitron_blacklist.push(/nofingerprintforthisservice/);
document.addEventListener("gcmanalyticsstorage_loaded", function() {
    tarteaucitron_block.unblock(/nofingerprintforthisservice/);
});
tarteaucitron_services["/ad.piximedia.com/"] = 'piximedia';
window.tarteaucitron_blacklist.push(/ad\.piximedia\.com/);
document.addEventListener("piximedia_loaded", function() {
    tarteaucitron_block.unblock(/ad\.piximedia\.com/);
});
tarteaucitron_services["/t.screeb.app/"] = 'screeb';
window.tarteaucitron_blacklist.push(/t\.screeb\.app/);
document.addEventListener("screeb_loaded", function() {
    tarteaucitron_block.unblock(/t\.screeb\.app/);
});
tarteaucitron_services["/leadbooster-chat.pipedrive.com/"] = 'pipedrive';
window.tarteaucitron_blacklist.push(/leadbooster-chat\.pipedrive\.com/);
document.addEventListener("pipedrive_loaded", function() {
    tarteaucitron_block.unblock(/leadbooster-chat\.pipedrive\.com/);
});
tarteaucitron_services["/ruxitagentjs_/"] = 'dynatrace';
window.tarteaucitron_blacklist.push(/ruxitagentjs_/);
document.addEventListener("dynatrace_loaded", function() {
    tarteaucitron_block.unblock(/ruxitagentjs_/);
});
tarteaucitron_services["/cdn.mxpnl.com/"] = 'mixpanel';
window.tarteaucitron_blacklist.push(/cdn\.mxpnl\.com/);
document.addEventListener("mixpanel_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.mxpnl\.com/);
});
tarteaucitron_services["/eu.fw-cdn.com/"] = 'freshsalescrm';
window.tarteaucitron_blacklist.push(/eu\.fw-cdn\.com/);
document.addEventListener("freshsalescrm_loaded", function() {
    tarteaucitron_block.unblock(/eu\.fw-cdn\.com/);
});
tarteaucitron_services["/ced.sas---cdn.com/"] = 'equativ';
window.tarteaucitron_blacklist.push(/ced\.sas---cdn\.com/);
document.addEventListener("equativ_loaded", function() {
    tarteaucitron_block.unblock(/ced\.sas---cdn\.com/);
});
tarteaucitron_services["/player.twitch.tv/"] = 'twitch';
window.tarteaucitron_blacklist.push(/player\.twitch\.tv/);
document.addEventListener("twitch_loaded", function() {
    tarteaucitron_block.unblock(/player\.twitch\.tv/);
});
tarteaucitron_services["/dsp-media.eskimi.com/"] = 'eskimi';
window.tarteaucitron_blacklist.push(/dsp-media\.eskimi\.com/);
document.addEventListener("eskimi_loaded", function() {
    tarteaucitron_block.unblock(/dsp-media\.eskimi\.com/);
});
tarteaucitron_services["/platform-api.sharethis.com/"] = 'sharethissticky';
window.tarteaucitron_blacklist.push(/platform-api\.sharethis\.com/);
document.addEventListener("sharethissticky_loaded", function() {
    tarteaucitron_block.unblock(/platform-api\.sharethis\.com/);
});
tarteaucitron_services["/piano-analytics.js/"] = 'pianoanalytics';
window.tarteaucitron_blacklist.push(/piano-analytics\.js/);
document.addEventListener("pianoanalytics_loaded", function() {
    tarteaucitron_block.unblock(/piano-analytics\.js/);
});
tarteaucitron_services["/actistat.fr/"] = 'actistat';
window.tarteaucitron_blacklist.push(/actistat\.fr/);
document.addEventListener("actistat_loaded", function() {
    tarteaucitron_block.unblock(/actistat\.fr/);
});
tarteaucitron_services["/amplify.outbrain.com/"] = 'outbrainamplify';
window.tarteaucitron_blacklist.push(/amplify\.outbrain\.com/);
document.addEventListener("outbrainamplify_loaded", function() {
    tarteaucitron_block.unblock(/amplify\.outbrain\.com/);
});
tarteaucitron_services["/playplay.com/"] = 'playplay';
window.tarteaucitron_blacklist.push(/playplay\.com/);
document.addEventListener("playplay_loaded", function() {
    tarteaucitron_block.unblock(/playplay\.com/);
});
tarteaucitron_services["/assets.adobedtm.com/"] = 'adobeworkspace';
window.tarteaucitron_blacklist.push(/assets\.adobedtm\.com/);
document.addEventListener("adobeworkspace_loaded", function() {
    tarteaucitron_block.unblock(/assets\.adobedtm\.com/);
});
tarteaucitron_services["/cdn-eu.pagesense.io/"] = 'zohopagesense';
window.tarteaucitron_blacklist.push(/cdn-eu\.pagesense\.io/);
document.addEventListener("zohopagesense_loaded", function() {
    tarteaucitron_block.unblock(/cdn-eu\.pagesense\.io/);
});
tarteaucitron_services["/cdn.leadinfo.net/"] = 'leadinfo';
window.tarteaucitron_blacklist.push(/cdn\.leadinfo\.net/);
document.addEventListener("leadinfo_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.leadinfo\.net/);
});
tarteaucitron_services["/static.websites.data-crypt.com/"] = 'force24';
window.tarteaucitron_blacklist.push(/static\.websites\.data-crypt\.com/);
document.addEventListener("force24_loaded", function() {
    tarteaucitron_block.unblock(/static\.websites\.data-crypt\.com/);
});
tarteaucitron_services["/tiktok.com/embed.js/"] = 'tiktokvideo';
window.tarteaucitron_blacklist.push(/tiktok\.com\/embed\.js/);
document.addEventListener("tiktokvideo_loaded", function() {
    tarteaucitron_block.unblock(/tiktok\.com\/embed\.js/);
});
tarteaucitron_services["/shinystat.com/"] = 'shinystat';
window.tarteaucitron_blacklist.push(/shinystat\.com/);
document.addEventListener("shinystat_loaded", function() {
    tarteaucitron_block.unblock(/shinystat\.com/);
});
tarteaucitron_services["/collectcdn.com/"] = 'collectchat';
window.tarteaucitron_blacklist.push(/collectcdn\.com/);
document.addEventListener("collectchat_loaded", function() {
    tarteaucitron_block.unblock(/collectcdn\.com/);
});
tarteaucitron_services["/diffuser-cdn.app-us1.com/"] = 'activecampaignvgo';
window.tarteaucitron_blacklist.push(/diffuser-cdn\.app-us1\.com/);
document.addEventListener("activecampaignvgo_loaded", function() {
    tarteaucitron_block.unblock(/diffuser-cdn\.app-us1\.com/);
});
tarteaucitron_services["/sibautomation.com/"] = 'sendinblue';
window.tarteaucitron_blacklist.push(/sibautomation\.com/);
document.addEventListener("sendinblue_loaded", function() {
    tarteaucitron_block.unblock(/sibautomation\.com/);
});
tarteaucitron_services["/noneforeulerianandtac/"] = 'eulerian';
window.tarteaucitron_blacklist.push(/noneforeulerianandtac/);
document.addEventListener("eulerian_loaded", function() {
    tarteaucitron_block.unblock(/noneforeulerianandtac/);
});
tarteaucitron_services["/script.tolk.ai/"] = 'tolkai';
window.tarteaucitron_blacklist.push(/script\.tolk\.ai/);
document.addEventListener("tolkai_loaded", function() {
    tarteaucitron_block.unblock(/script\.tolk\.ai/);
});
tarteaucitron_services["/assets.calendly.com/"] = 'calendly';
window.tarteaucitron_blacklist.push(/assets\.calendly\.com/);
document.addEventListener("calendly_loaded", function() {
    tarteaucitron_block.unblock(/assets\.calendly\.com/);
});
tarteaucitron_services["/noneforposthogantac/"] = 'posthog';
window.tarteaucitron_blacklist.push(/noneforposthogantac/);
document.addEventListener("posthog_loaded", function() {
    tarteaucitron_block.unblock(/noneforposthogantac/);
});
tarteaucitron_services["/accounts.google.com/gsi/client/"] = 'googlesignin';
window.tarteaucitron_blacklist.push(/accounts\.google\.com\/gsi\/client/);
document.addEventListener("googlesignin_loaded", function() {
    tarteaucitron_block.unblock(/accounts\.google\.com\/gsi\/client/);
});
tarteaucitron_services["/app.robofabrica.tech/"] = 'robofabrica';
window.tarteaucitron_blacklist.push(/app\.robofabrica\.tech/);
document.addEventListener("robofabrica_loaded", function() {
    tarteaucitron_block.unblock(/app\.robofabrica\.tech/);
});
tarteaucitron_services["/wysistat.com/ws.jsa/"] = 'wysistathightrack';
window.tarteaucitron_blacklist.push(/wysistat\.com\/ws\.jsa/);
document.addEventListener("wysistathightrack_loaded", function() {
    tarteaucitron_block.unblock(/wysistat\.com\/ws\.jsa/);
});
tarteaucitron_services["/libanswers.com/"] = 'ubib';
window.tarteaucitron_blacklist.push(/libanswers\.com/);
document.addEventListener("ubib_loaded", function() {
    tarteaucitron_block.unblock(/libanswers\.com/);
});
tarteaucitron_services["/secure.team8save.com/"] = 'leadforensics';
window.tarteaucitron_blacklist.push(/secure\.team8save\.com/);
document.addEventListener("leadforensics_loaded", function() {
    tarteaucitron_block.unblock(/secure\.team8save\.com/);
});
tarteaucitron_services["/action.metaffiliation.com/"] = 'kwanko';
window.tarteaucitron_blacklist.push(/action\.metaffiliation\.com/);
document.addEventListener("kwanko_loaded", function() {
    tarteaucitron_block.unblock(/action\.metaffiliation\.com/);
});
tarteaucitron_services["/nofingerprint.abc/"] = 'matomotm';
window.tarteaucitron_blacklist.push(/nofingerprint\.abc/);
document.addEventListener("matomotm_loaded", function() {
    tarteaucitron_block.unblock(/nofingerprint\.abc/);
});
tarteaucitron_services["/sc-static.net/"] = 'snapchat';
window.tarteaucitron_blacklist.push(/sc-static\.net/);
document.addEventListener("snapchat_loaded", function() {
    tarteaucitron_block.unblock(/sc-static\.net/);
});
tarteaucitron_services["/static.avads.net/"] = 'antvoice';
window.tarteaucitron_blacklist.push(/static\.avads\.net/);
document.addEventListener("antvoice_loaded", function() {
    tarteaucitron_block.unblock(/static\.avads\.net/);
});
tarteaucitron_services["/app.videas.fr/"] = 'videas';
window.tarteaucitron_blacklist.push(/app\.videas\.fr/);
document.addEventListener("videas_loaded", function() {
    tarteaucitron_block.unblock(/app\.videas\.fr/);
});
tarteaucitron_services["/pagead2.googlesyndication.com/"] = 'adsenseauto';
window.tarteaucitron_blacklist.push(/pagead2\.googlesyndication\.com/);
document.addEventListener("adsenseauto_loaded", function() {
    tarteaucitron_block.unblock(/pagead2\.googlesyndication\.com/);
});
tarteaucitron_services["/www.google.com/adsense/search/ads/"] = 'adsensesearch';
window.tarteaucitron_blacklist.push(/www\.google\.com\/adsense\/search\/ads/);
document.addEventListener("adsensesearch_loaded", function() {
    tarteaucitron_block.unblock(/www\.google\.com\/adsense\/search\/ads/);
});
tarteaucitron_services["/arc.io/"] = 'arcio';
window.tarteaucitron_blacklist.push(/arc\.io/);
document.addEventListener("arcio_loaded", function() {
    tarteaucitron_block.unblock(/arc\.io/);
});
tarteaucitron_services["/static.klaviyo.com/"] = 'klaviyo';
window.tarteaucitron_blacklist.push(/static\.klaviyo\.com/);
document.addEventListener("klaviyo_loaded", function() {
    tarteaucitron_block.unblock(/static\.klaviyo\.com/);
});
tarteaucitron_services["/analytics.tiktok.com/"] = 'tiktok';
window.tarteaucitron_blacklist.push(/analytics\.tiktok\.com/);
document.addEventListener("tiktok_loaded", function() {
    tarteaucitron_block.unblock(/analytics\.tiktok\.com/);
});
tarteaucitron_services["/actorssl-5637.kxcdn.com/"] = 'myfeelback';
window.tarteaucitron_blacklist.push(/actorssl-5637\.kxcdn\.com/);
document.addEventListener("myfeelback_loaded", function() {
    tarteaucitron_block.unblock(/actorssl-5637\.kxcdn\.com/);
});
tarteaucitron_services["/fls.doubleclick.net/"] = 'doubleclick';
window.tarteaucitron_blacklist.push(/fls\.doubleclick\.net/);
document.addEventListener("doubleclick_loaded", function() {
    tarteaucitron_block.unblock(/fls\.doubleclick\.net/);
});
tarteaucitron_services["/js.userpilot.io/sdk/"] = 'userpilot';
window.tarteaucitron_blacklist.push(/js\.userpilot\.io\/sdk/);
document.addEventListener("userpilot_loaded", function() {
    tarteaucitron_block.unblock(/js\.userpilot\.io\/sdk/);
});
tarteaucitron_services["/.piwik.pro/"] = 'piwikpro';
window.tarteaucitron_blacklist.push(/\.piwik\.pro/);
document.addEventListener("piwikpro_loaded", function() {
    tarteaucitron_block.unblock(/\.piwik\.pro/);
});
tarteaucitron_services["/adperf_conversion.js/"] = 'weborama';
window.tarteaucitron_blacklist.push(/adperf_conversion\.js/);
document.addEventListener("weborama_loaded", function() {
    tarteaucitron_block.unblock(/adperf_conversion\.js/);
});
tarteaucitron_services["/client.crisp.chat/"] = 'crisp';
window.tarteaucitron_blacklist.push(/client\.crisp\.chat/);
document.addEventListener("crisp_loaded", function() {
    tarteaucitron_block.unblock(/client\.crisp\.chat/);
});
tarteaucitron_services["/microanalytics.io/"] = 'microanalytics';
window.tarteaucitron_blacklist.push(/microanalytics\.io/);
document.addEventListener("microanalytics_loaded", function() {
    tarteaucitron_block.unblock(/microanalytics\.io/);
});
tarteaucitron_services["/xfbml.customerchat.js/"] = 'facebookcustomerchat';
window.tarteaucitron_blacklist.push(/xfbml\.customerchat\.js/);
document.addEventListener("facebookcustomerchat_loaded", function() {
    tarteaucitron_block.unblock(/xfbml\.customerchat\.js/);
});
tarteaucitron_services["/openstreetmap.org/export/embed/"] = 'openstreetmap';
window.tarteaucitron_blacklist.push(/openstreetmap\.org\/export\/embed/);
document.addEventListener("openstreetmap_loaded", function() {
    tarteaucitron_block.unblock(/openstreetmap\.org\/export\/embed/);
});
tarteaucitron_services["/geoportail.gouv.fr/embed/"] = 'geoportail';
window.tarteaucitron_blacklist.push(/geoportail\.gouv\.fr\/embed/);
document.addEventListener("geoportail_loaded", function() {
    tarteaucitron_block.unblock(/geoportail\.gouv\.fr\/embed/);
});
tarteaucitron_services["/archive.org/embed/"] = 'archive';
window.tarteaucitron_blacklist.push(/archive\.org\/embed/);
document.addEventListener("archive_loaded", function() {
    tarteaucitron_block.unblock(/archive\.org\/embed/);
});
tarteaucitron_services["/gallica.bnf.fr/"] = 'gallica';
window.tarteaucitron_blacklist.push(/gallica\.bnf\.fr/);
document.addEventListener("gallica_loaded", function() {
    tarteaucitron_block.unblock(/gallica\.bnf\.fr/);
});
tarteaucitron_services["/meteofrance.com/widget/"] = 'meteofrance';
window.tarteaucitron_blacklist.push(/meteofrance\.com\/widget/);
document.addEventListener("meteofrance_loaded", function() {
    tarteaucitron_block.unblock(/meteofrance\.com\/widget/);
});
tarteaucitron_services["/www.meteocity.com/"] = 'm6meteo';
window.tarteaucitron_blacklist.push(/www\.meteocity\.com/);
document.addEventListener("m6meteo_loaded", function() {
    tarteaucitron_block.unblock(/www\.meteocity\.com/);
});
tarteaucitron_services["/.mtcaptcha.com/"] = 'mtcaptcha';
window.tarteaucitron_blacklist.push(/\.mtcaptcha\.com/);
document.addEventListener("mtcaptcha_loaded", function() {
    tarteaucitron_block.unblock(/\.mtcaptcha\.com/);
});
tarteaucitron_services["/static.criteo.net/"] = 'criteoonetag';
window.tarteaucitron_blacklist.push(/static\.criteo\.net/);
document.addEventListener("criteoonetag_loaded", function() {
    tarteaucitron_block.unblock(/static\.criteo\.net/);
});
tarteaucitron_services["/webchat.studizz.fr/"] = 'studizz';
window.tarteaucitron_blacklist.push(/webchat\.studizz\.fr/);
document.addEventListener("studizz_loaded", function() {
    tarteaucitron_block.unblock(/webchat\.studizz\.fr/);
});
tarteaucitron_services["/www.canal-u.tv/video/"] = 'canalu';
window.tarteaucitron_blacklist.push(/www\.canal-u\.tv\/video/);
document.addEventListener("canalu_loaded", function() {
    tarteaucitron_block.unblock(/www\.canal-u\.tv\/video/);
});
tarteaucitron_services["/webtv.normandie-univ.fr/"] = 'webtvnu';
window.tarteaucitron_blacklist.push(/webtv\.normandie-univ\.fr/);
document.addEventListener("webtvnu_loaded", function() {
    tarteaucitron_block.unblock(/webtv\.normandie-univ\.fr/);
});
tarteaucitron_services["/widgets.outbrain.com/"] = 'outbrain';
window.tarteaucitron_blacklist.push(/widgets\.outbrain\.com/);
document.addEventListener("outbrain_loaded", function() {
    tarteaucitron_block.unblock(/widgets\.outbrain\.com/);
});
tarteaucitron_services["/static.affilae.com/"] = 'affilae';
window.tarteaucitron_blacklist.push(/static\.affilae\.com/);
document.addEventListener("affilae_loaded", function() {
    tarteaucitron_block.unblock(/static\.affilae\.com/);
});
tarteaucitron_services["/google.com/maps/embed?pb=/"] = 'maps_noapi';
window.tarteaucitron_blacklist.push(/google\.com\/maps\/embed?pb=/);
document.addEventListener("maps_noapi_loaded", function() {
    tarteaucitron_block.unblock(/maps\.googleapis\.com/);
    tarteaucitron_block.unblock(/google\.com\/maps\/embed?pb=/);
});
tarteaucitron_services["/hcaptcha.com/1/api.js/"] = 'hcaptcha';
window.tarteaucitron_blacklist.push(/hcaptcha\.com\/1\/api\.js/);
document.addEventListener("hcaptcha_loaded", function() {
    tarteaucitron_block.unblock(/hcaptcha\.com\/1\/api\.js/);
});
tarteaucitron_services["/franceculture.fr/player//"] = 'fculture';
window.tarteaucitron_blacklist.push(/franceculture\.fr\/player\//);
document.addEventListener("fculture_loaded", function() {
    tarteaucitron_block.unblock(/franceculture\.fr\/player\//);
});
tarteaucitron_services["/embed.acast.com/"] = 'acast';
window.tarteaucitron_blacklist.push(/embed\.acast\.com/);
document.addEventListener("acast_loaded", function() {
    tarteaucitron_block.unblock(/embed\.acast\.com/);
});
tarteaucitron_services["/mixcloud.com/widget//"] = 'mixcloud';
window.tarteaucitron_blacklist.push(/mixcloud\.com\/widget\//);
document.addEventListener("mixcloud_loaded", function() {
    tarteaucitron_block.unblock(/mixcloud\.com\/widget\//);
});
tarteaucitron_services["/google.com/calendar/embed/"] = 'gagenda';
window.tarteaucitron_blacklist.push(/google\.com\/calendar\/embed/);
document.addEventListener("gagenda_loaded", function() {
    tarteaucitron_block.unblock(/google\.com\/calendar\/embed/);
});
tarteaucitron_services["/docs.google.com/document/d/"] = 'gdocs';
window.tarteaucitron_blacklist.push(/docs\.google\.com\/document\/d/);
document.addEventListener("gdocs_loaded", function() {
    tarteaucitron_block.unblock(/docs\.google\.com\/document\/d/);
});
tarteaucitron_services["/docs.google.com/spreadsheets/d/"] = 'gsheets';
window.tarteaucitron_blacklist.push(/docs\.google\.com\/spreadsheets\/d/);
document.addEventListener("gsheets_loaded", function() {
    tarteaucitron_block.unblock(/docs\.google\.com\/spreadsheets\/d/);
});
tarteaucitron_services["/googleoptimize.com/"] = 'goptimize';
window.tarteaucitron_blacklist.push(/googleoptimize\.com/);
document.addEventListener("goptimize_loaded", function() {
    tarteaucitron_block.unblock(/googleoptimize\.com/);
});
tarteaucitron_services["/nofingerprintforoldmatomo/"] = 'matomo';
window.tarteaucitron_blacklist.push(/nofingerprintforoldmatomo/);
document.addEventListener("matomo_loaded", function() {
    tarteaucitron_block.unblock(/nofingerprintforoldmatomo/);
});
tarteaucitron_services["/cdn.matomo.cloud/"] = 'matomocloud';
window.tarteaucitron_blacklist.push(/cdn\.matomo\.cloud/);
document.addEventListener("matomocloud_loaded", function() {
    tarteaucitron_block.unblock(/matomo\.js/);
    tarteaucitron_block.unblock(/\/matomo\./);
    tarteaucitron_block.unblock(/cdn\.matomo\.cloud/);
});
tarteaucitron_services["/piwik.js/"] = 'matomocloud';
window.tarteaucitron_blacklist.push(/piwik\.js/);
document.addEventListener("matomocloud_loaded", function() {
    tarteaucitron_block.unblock(/piwik\.js/);
});
tarteaucitron_services["/matomo.js/"] = 'matomocloud';
window.tarteaucitron_blacklist.push(/matomo\.js/);
document.addEventListener("matomocloud_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.matomo\.cloud/);
    tarteaucitron_block.unblock(/\/matomo\./);
    tarteaucitron_block.unblock(/matomo\.js/);
});
tarteaucitron_services["//matomo./"] = 'matomocloud';
window.tarteaucitron_blacklist.push(/\/matomo\./);
document.addEventListener("matomocloud_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.matomo\.cloud/);
    tarteaucitron_block.unblock(/matomo\.js/);
    tarteaucitron_block.unblock(/\/matomo\./);
});
tarteaucitron_services["//matomo-/"] = 'matomocloud';
window.tarteaucitron_blacklist.push(/\/matomo-/);
document.addEventListener("matomocloud_loaded", function() {
    tarteaucitron_block.unblock(/\/matomo-/);
});
tarteaucitron_services["/docs.google.com/presentation/d/"] = 'gslides';
window.tarteaucitron_blacklist.push(/docs\.google\.com\/presentation\/d/);
document.addEventListener("gslides_loaded", function() {
    tarteaucitron_block.unblock(/docs\.google\.com\/presentation\/d/);
});
tarteaucitron_services["/docs.google.com/forms/d/"] = 'gforms';
window.tarteaucitron_blacklist.push(/docs\.google\.com\/forms\/d/);
document.addEventListener("gforms_loaded", function() {
    tarteaucitron_block.unblock(/docs\.google\.com\/forms\/d/);
});
tarteaucitron_services["/widget.trustpilot.com/"] = 'trustpilot';
window.tarteaucitron_blacklist.push(/widget\.trustpilot\.com/);
document.addEventListener("trustpilot_loaded", function() {
    tarteaucitron_block.unblock(/widget\.trustpilot\.com/);
});
tarteaucitron_services["/youtube.com/embed//"] = 'youtube';
window.tarteaucitron_blacklist.push(/youtube\.com\/embed\//);
document.addEventListener("youtube_loaded", function() {
    tarteaucitron_block.unblock(/youtube\.com\/embed\//);
});
tarteaucitron_services["/www.youtube-nocookie.com/"] = 'youtube';
window.tarteaucitron_blacklist.push(/www\.youtube-nocookie\.com/);
document.addEventListener("youtube_loaded", function() {
    tarteaucitron_block.unblock(/www\.youtube-nocookie\.com/);
});
tarteaucitron_services["/youtu.be/"] = 'youtube';
window.tarteaucitron_blacklist.push(/youtu\.be/);
document.addEventListener("youtube_loaded", function() {
    tarteaucitron_block.unblock(/youtu\.be/);
});
tarteaucitron_services["/widget.intercom.io/"] = 'intercomChat';
window.tarteaucitron_blacklist.push(/widget\.intercom\.io/);
document.addEventListener("intercomChat_loaded", function() {
    tarteaucitron_block.unblock(/widget\.intercom\.io/);
});
tarteaucitron_services["/discord.com/widget/"] = 'discord';
window.tarteaucitron_blacklist.push(/discord\.com\/widget/);
document.addEventListener("discord_loaded", function() {
    tarteaucitron_block.unblock(/discord\.com\/widget/);
});
tarteaucitron_services["/munchkin.marketo.net/"] = 'marketomunchkin';
window.tarteaucitron_blacklist.push(/munchkin\.marketo\.net/);
document.addEventListener("marketomunchkin_loaded", function() {
    tarteaucitron_block.unblock(/munchkin\.marketo\.net/);
});
tarteaucitron_services["/bandcamp.com/"] = 'bandcamp';
window.tarteaucitron_blacklist.push(/bandcamp\.com/);
document.addEventListener("bandcamp_loaded", function() {
    tarteaucitron_block.unblock(/bandcamp\.com/);
});
tarteaucitron_services["/open.spotify.com/"] = 'genially';
window.tarteaucitron_blacklist.push(/open\.spotify\.com/);
document.addEventListener("genially_loaded", function() {
    tarteaucitron_block.unblock(/open\.spotify\.com/);
});
tarteaucitron_services["/link-page.info/"] = 'visiblee';
window.tarteaucitron_blacklist.push(/link-page\.info/);
document.addEventListener("visiblee_loaded", function() {
    tarteaucitron_block.unblock(/link-page\.info/);
});
tarteaucitron_services["/gstatic.com/firebasejs/"] = 'firebase';
window.tarteaucitron_blacklist.push(/gstatic\.com\/firebasejs/);
document.addEventListener("firebase_loaded", function() {
    tarteaucitron_block.unblock(/gstatic\.com\/firebasejs/);
});
tarteaucitron_services["/smartsuppchat.com/"] = 'smartsupp';
window.tarteaucitron_blacklist.push(/smartsuppchat\.com/);
document.addEventListener("smartsupp_loaded", function() {
    tarteaucitron_block.unblock(/smartsuppchat\.com/);
});
tarteaucitron_services["/.plezi.co/"] = 'plezi';
window.tarteaucitron_blacklist.push(/\.plezi\.co/);
document.addEventListener("plezi_loaded", function() {
    tarteaucitron_block.unblock(/\.plezi\.co/);
});
tarteaucitron_services["/apps.elfsight.com/"] = 'elfsight';
window.tarteaucitron_blacklist.push(/apps\.elfsight\.com/);
document.addEventListener("elfsight_loaded", function() {
    tarteaucitron_block.unblock(/apps\.elfsight\.com/);
});
tarteaucitron_services["/www.instagram.com/"] = 'instagram';
window.tarteaucitron_blacklist.push(/www\.instagram\.com/);
document.addEventListener("instagram_loaded", function() {
    tarteaucitron_block.unblock(/www\.instagram\.com/);
});
tarteaucitron_services["/widget.deezer.com/"] = 'deezer';
window.tarteaucitron_blacklist.push(/widget\.deezer\.com/);
document.addEventListener("deezer_loaded", function() {
    tarteaucitron_block.unblock(/widget\.deezer\.com/);
});
tarteaucitron_services["/acdn.adnxs.com/dmp/up/"] = 'xandr';
window.tarteaucitron_blacklist.push(/acdn\.adnxs\.com\/dmp\/up/);
document.addEventListener("xandr_loaded", function() {
    tarteaucitron_block.unblock(/acdn\.adnxs\.com\/dmp\/up/);
});
tarteaucitron_services["/ib.adnxs.com/seg/"] = 'xandrsegment';
window.tarteaucitron_blacklist.push(/ib\.adnxs\.com\/seg/);
document.addEventListener("xandrsegment_loaded", function() {
    tarteaucitron_block.unblock(/ib\.adnxs\.com\/seg/);
});
tarteaucitron_services["/ib.adnxs.com/px/"] = 'xandrconversion';
window.tarteaucitron_blacklist.push(/ib\.adnxs\.com\/px/);
document.addEventListener("xandrconversion_loaded", function() {
    tarteaucitron_block.unblock(/ib\.adnxs\.com\/px/);
});
tarteaucitron_services["/pingdom.net/"] = 'pingdom';
window.tarteaucitron_blacklist.push(/pingdom\.net/);
document.addEventListener("pingdom_loaded", function() {
    tarteaucitron_block.unblock(/pingdom\.net/);
});
tarteaucitron_services["/helloasso.com/"] = 'helloasso';
window.tarteaucitron_blacklist.push(/helloasso\.com/);
document.addEventListener("helloasso_loaded", function() {
    tarteaucitron_block.unblock(/helloasso\.com/);
});
tarteaucitron_services["/podcloud.fr/"] = 'podcloud';
window.tarteaucitron_blacklist.push(/podcloud\.fr/);
document.addEventListener("podcloud_loaded", function() {
    tarteaucitron_block.unblock(/podcloud\.fr/);
});
tarteaucitron_services["/facebook.com/plugins/"] = 'facebookpost';
window.tarteaucitron_blacklist.push(/facebook\.com\/plugins/);
document.addEventListener("facebookpost_loaded", function() {
    tarteaucitron_block.unblock(/facebook\.com\/plugins/);
});
tarteaucitron_services["/stonly.com/"] = 'stonly';
window.tarteaucitron_blacklist.push(/stonly\.com/);
document.addEventListener("stonly_loaded", function() {
    tarteaucitron_block.unblock(/stonly\.com/);
});
tarteaucitron_services["/compteur.fr/"] = 'compteur';
window.tarteaucitron_blacklist.push(/compteur\.fr/);
document.addEventListener("compteur_loaded", function() {
    tarteaucitron_block.unblock(/compteur\.fr/);
});
tarteaucitron_services["/cdn.onesignal.com/"] = 'onesignal';
window.tarteaucitron_blacklist.push(/cdn\.onesignal\.com/);
document.addEventListener("onesignal_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.onesignal\.com/);
});
tarteaucitron_services["/w.soundcloud.com/"] = 'soundcloud';
window.tarteaucitron_blacklist.push(/w\.soundcloud\.com/);
document.addEventListener("soundcloud_loaded", function() {
    tarteaucitron_block.unblock(/w\.soundcloud\.com/);
});
tarteaucitron_services["/static.woopra.com/"] = 'woopra';
window.tarteaucitron_blacklist.push(/static\.woopra\.com/);
document.addEventListener("woopra_loaded", function() {
    tarteaucitron_block.unblock(/static\.woopra\.com/);
});
tarteaucitron_services["/clarity.ms/"] = 'clarity';
window.tarteaucitron_blacklist.push(/clarity\.ms/);
document.addEventListener("clarity_loaded", function() {
    tarteaucitron_block.unblock(/clarity\.ms/);
});
tarteaucitron_services["/ws.facil-iti.com/"] = 'faciliti';
window.tarteaucitron_blacklist.push(/ws\.facil-iti\.com/);
document.addEventListener("faciliti_loaded", function() {
    tarteaucitron_block.unblock(/ws\.facil-iti\.com/);
});
tarteaucitron_services["/a_ssets.adobedtm.com/"] = 'adobeanalytics';
window.tarteaucitron_blacklist.push(/a_ssets\.adobedtm\.com/);
document.addEventListener("adobeanalytics_loaded", function() {
    tarteaucitron_block.unblock(/a_ssets\.adobedtm\.com/);
});
tarteaucitron_services["/userlike-cdn-widgets/"] = 'userlike';
window.tarteaucitron_blacklist.push(/userlike-cdn-widgets/);
document.addEventListener("userlike_loaded", function() {
    tarteaucitron_block.unblock(/userlike-cdn-widgets/);
});
tarteaucitron_services["/webfont.js/"] = 'googlefonts';
window.tarteaucitron_blacklist.push(/webfont\.js/);
document.addEventListener("googlefonts_loaded", function() {
    tarteaucitron_block.unblock(/webfont\.js/);
});
tarteaucitron_services["/cdn.amplitude.com/"] = 'amplitude';
window.tarteaucitron_blacklist.push(/cdn\.amplitude\.com/);
document.addEventListener("amplitude_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.amplitude\.com/);
});
tarteaucitron_services["/t.contentsquare.net/"] = 'contentsquare';
window.tarteaucitron_blacklist.push(/t\.contentsquare\.net/);
document.addEventListener("contentsquare_loaded", function() {
    tarteaucitron_block.unblock(/t\.contentsquare\.net/);
});
tarteaucitron_services["/try.abtasty.com/"] = 'abtasty';
window.tarteaucitron_blacklist.push(/try\.abtasty\.com/);
document.addEventListener("abtasty_loaded", function() {
    tarteaucitron_block.unblock(/try\.abtasty\.com/);
});
tarteaucitron_services["/cdn.tagcommander.com/"] = 'tagcommander';
window.tarteaucitron_blacklist.push(/cdn\.tagcommander\.com/);
document.addEventListener("tagcommander_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.tagcommander\.com/);
});
tarteaucitron_services["/KobanObject/"] = 'koban';
window.tarteaucitron_blacklist.push(/KobanObject/);
document.addEventListener("koban_loaded", function() {
    tarteaucitron_block.unblock(/KobanObject/);
});
tarteaucitron_services["/marketingautomation.services/"] = 'sharpspring';
window.tarteaucitron_blacklist.push(/marketingautomation\.services/);
document.addEventListener("sharpspring_loaded", function() {
    tarteaucitron_block.unblock(/marketingautomation\.services/);
});
tarteaucitron_services["/pardot.com/pd.js/"] = 'pardot';
window.tarteaucitron_blacklist.push(/pardot\.com\/pd\.js/);
document.addEventListener("pardot_loaded", function() {
    tarteaucitron_block.unblock(/pardot\.com\/pd\.js/);
});
tarteaucitron_services["/s.d.adup-tech.com/"] = 'aduptech_retargeting';
window.tarteaucitron_blacklist.push(/s\.d\.adup-tech\.com/);
document.addEventListener("aduptech_retargeting_loaded", function() {
    tarteaucitron_block.unblock(/s\.d\.adup-tech\.com/);
});
tarteaucitron_services["/d.adup-tech.com/"] = 'aduptech_conversion';
window.tarteaucitron_blacklist.push(/d\.adup-tech\.com/);
document.addEventListener("aduptech_conversion_loaded", function() {
    tarteaucitron_block.unblock(/d\.adup-tech\.com/);
});
tarteaucitron_services["/e.issuu.com/"] = 'issuu';
window.tarteaucitron_blacklist.push(/e\.issuu\.com/);
document.addEventListener("issuu_loaded", function() {
    tarteaucitron_block.unblock(/e\.issuu\.com/);
});
tarteaucitron_services["/addthis.com/js//"] = 'addthis';
window.tarteaucitron_blacklist.push(/addthis\.com\/js\//);
document.addEventListener("addthis_loaded", function() {
    tarteaucitron_block.unblock(/addthis\.com\/js\//);
});
tarteaucitron_services["/static.addtoany.com/"] = 'addtoanyfeed';
window.tarteaucitron_blacklist.push(/static\.addtoany\.com/);
document.addEventListener("addtoanyfeed_loaded", function() {
    tarteaucitron_block.unblock(/static\.addtoany\.com/);
});
tarteaucitron_services["/webmecanik/"] = 'webmecanik';
window.tarteaucitron_blacklist.push(/webmecanik/);
document.addEventListener("webmecanik_loaded", function() {
    tarteaucitron_block.unblock(/webmecanik/);
});
tarteaucitron_services["/mtc.js/"] = 'webmecanik';
window.tarteaucitron_blacklist.push(/mtc\.js/);
document.addEventListener("webmecanik_loaded", function() {
    tarteaucitron_block.unblock(/mtc\.js/);
});
tarteaucitron_services["/static.hotjar.com/"] = 'hotjar';
window.tarteaucitron_blacklist.push(/static\.hotjar\.com/);
document.addEventListener("hotjar_loaded", function() {
    tarteaucitron_block.unblock(/static\.hotjar\.com/);
});
tarteaucitron_services["/atrk.js/"] = 'alexa';
window.tarteaucitron_blacklist.push(/atrk\.js/);
document.addEventListener("alexa_loaded", function() {
    tarteaucitron_block.unblock(/atrk\.js/);
});
tarteaucitron_services["/stats.webleads-tracker.com/"] = 'getquanty';
window.tarteaucitron_blacklist.push(/stats\.webleads-tracker\.com/);
document.addEventListener("getquanty_loaded", function() {
    tarteaucitron_block.unblock(/stats\.webleads-tracker\.com/);
});
tarteaucitron_services["/get.smart-data-systems.com/"] = 'getquanty';
window.tarteaucitron_blacklist.push(/get\.smart-data-systems\.com/);
document.addEventListener("getquanty_loaded", function() {
    tarteaucitron_block.unblock(/get\.smart-data-systems\.com/);
});
tarteaucitron_services["/s.pinimg.com/ct/"] = 'pinterestpixel';
window.tarteaucitron_blacklist.push(/s\.pinimg\.com\/ct/);
document.addEventListener("pinterestpixel_loaded", function() {
    tarteaucitron_block.unblock(/s\.pinimg\.com\/ct/);
});
tarteaucitron_services["/amazon-adsystem.com/"] = 'amazon';
window.tarteaucitron_blacklist.push(/amazon-adsystem\.com/);
document.addEventListener("amazon_loaded", function() {
    tarteaucitron_block.unblock(/amazon-adsystem\.com/);
});
tarteaucitron_services["/v.calameo.com/"] = 'calameo';
window.tarteaucitron_blacklist.push(/v\.calameo\.com/);
document.addEventListener("calameo_loaded", function() {
    tarteaucitron_block.unblock(/v\.calameo\.com/);
});
tarteaucitron_services["/bat.bing.com/"] = 'bingads';
window.tarteaucitron_blacklist.push(/bat\.bing\.com/);
document.addEventListener("bingads_loaded", function() {
    tarteaucitron_block.unblock(/bat\.bing\.com/);
});
tarteaucitron_services["/static.getclicky.com/"] = 'clicky';
window.tarteaucitron_blacklist.push(/static\.getclicky\.com/);
document.addEventListener("clicky_loaded", function() {
    tarteaucitron_block.unblock(/static\.getclicky\.com/);
});
tarteaucitron_services["/ads.clicmanager.fr/"] = 'clicmanager';
window.tarteaucitron_blacklist.push(/ads\.clicmanager\.fr/);
document.addEventListener("clicmanager_loaded", function() {
    tarteaucitron_block.unblock(/ads\.clicmanager\.fr/);
});
tarteaucitron_services["/dnn506yrbagrg.cloudfront.net/"] = 'crazyegg';
window.tarteaucitron_blacklist.push(/dnn506yrbagrg\.cloudfront\.net/);
document.addEventListener("crazyegg_loaded", function() {
    tarteaucitron_block.unblock(/dnn506yrbagrg\.cloudfront\.net/);
});
tarteaucitron_services["/cas.criteo.com/"] = 'criteo';
window.tarteaucitron_blacklist.push(/cas\.criteo\.com/);
document.addEventListener("criteo_loaded", function() {
    tarteaucitron_block.unblock(/cas\.criteo\.com/);
});
tarteaucitron_services["/dailymotion.com/embed/video/"] = 'dailymotion';
window.tarteaucitron_blacklist.push(/dailymotion\.com\/embed\/video/);
document.addEventListener("dailymotion_loaded", function() {
    tarteaucitron_block.unblock(/dailymotion\.com\/embed\/video/);
});
tarteaucitron_services["/www.arte.tv/player/"] = 'artetv';
window.tarteaucitron_blacklist.push(/www\.arte\.tv\/player/);
document.addEventListener("artetv_loaded", function() {
    tarteaucitron_block.unblock(/www\.arte\.tv\/player/);
});
tarteaucitron_services["/tools-affil2.com/"] = 'datingaffiliation';
window.tarteaucitron_blacklist.push(/tools-affil2\.com/);
document.addEventListener("datingaffiliation_loaded", function() {
    tarteaucitron_block.unblock(/tools-affil2\.com/);
});
tarteaucitron_services["/promotools.biz/"] = 'datingaffiliationpopup';
window.tarteaucitron_blacklist.push(/promotools\.biz/);
document.addEventListener("datingaffiliationpopup_loaded", function() {
    tarteaucitron_block.unblock(/promotools\.biz/);
});
tarteaucitron_services["/disqus.com/embed.js/"] = 'disqus';
window.tarteaucitron_blacklist.push(/disqus\.com\/embed\.js/);
document.addEventListener("disqus_loaded", function() {
    tarteaucitron_block.unblock(/disqus\.com\/embed\.js/);
});
tarteaucitron_services["/connect.ekomi/"] = 'ekomi';
window.tarteaucitron_blacklist.push(/connect\.ekomi/);
document.addEventListener("ekomi_loaded", function() {
    tarteaucitron_block.unblock(/connect\.ekomi/);
});
tarteaucitron_services["/static.etracker.com/"] = 'etracker';
window.tarteaucitron_blacklist.push(/static\.etracker\.com/);
document.addEventListener("etracker_loaded", function() {
    tarteaucitron_block.unblock(/static\.etracker\.com/);
});
tarteaucitron_services["/connect.facebook.net/"] = 'facebook';
window.tarteaucitron_blacklist.push(/connect\.facebook\.net/);
document.addEventListener("facebook_loaded", function() {
    tarteaucitron_block.unblock(/connect\.facebook\.net/);
});
tarteaucitron_services["/plausible.io/"] = 'plausible';
window.tarteaucitron_blacklist.push(/plausible\.io/);
document.addEventListener("plausible_loaded", function() {
    tarteaucitron_block.unblock(/plausible\.io/);
});
tarteaucitron_services["/static.ferank.fr/"] = 'ferank';
window.tarteaucitron_blacklist.push(/static\.ferank\.fr/);
document.addEventListener("ferank_loaded", function() {
    tarteaucitron_block.unblock(/static\.ferank\.fr/);
});
tarteaucitron_services["/simpleanalyticscdn/"] = 'simpleanalytics';
window.tarteaucitron_blacklist.push(/simpleanalyticscdn/);
document.addEventListener("simpleanalytics_loaded", function() {
    tarteaucitron_block.unblock(/simpleanalyticscdn/);
});
tarteaucitron_services["/apis.google.com/js/platform.js/"] = 'googlepartners';
window.tarteaucitron_blacklist.push(/apis\.google\.com\/js\/platform\.js/);
document.addEventListener("googlepartners_loaded", function() {
    tarteaucitron_block.unblock(/apis\.google\.com\/js\/platform\.js/);
});
tarteaucitron_services["/www.google.com/coop/cse/brand/"] = 'adsensesearchform';
window.tarteaucitron_blacklist.push(/www\.google\.com\/coop\/cse\/brand/);
document.addEventListener("adsensesearchform_loaded", function() {
    tarteaucitron_block.unblock(/www\.google\.com\/coop\/cse\/brand/);
});
tarteaucitron_services["/www.google.com/cse/cse/"] = 'adsensesearchresult';
window.tarteaucitron_blacklist.push(/www\.google\.com\/cse\/cse/);
document.addEventListener("adsensesearchresult_loaded", function() {
    tarteaucitron_block.unblock(/www\.google\.com\/cse\/cse/);
});
tarteaucitron_services["/www.googleadservices.com/pagead/conversion/"] = 'googleadwordsconversion';
window.tarteaucitron_blacklist.push(/www\.googleadservices\.com\/pagead\/conversion/);
document.addEventListener("googleadwordsconversion_loaded", function() {
    tarteaucitron_block.unblock(/www\.googleadservices\.com\/pagead\/conversion/);
});
tarteaucitron_services["/mautic/"] = 'mautic';
window.tarteaucitron_blacklist.push(/mautic/);
document.addEventListener("mautic_loaded", function() {
    tarteaucitron_block.unblock(/mautic/);
});
tarteaucitron_services["/js/owa.tracker/"] = 'openwebanalytics';
window.tarteaucitron_blacklist.push(/js\/owa\.tracker/);
document.addEventListener("openwebanalytics_loaded", function() {
    tarteaucitron_block.unblock(/js\/owa\.tracker/);
});
tarteaucitron_services["/AW-/"] = 'googleads';
window.tarteaucitron_blacklist.push(/AW-/);
document.addEventListener("googleads_loaded", function() {
    tarteaucitron_block.unblock(/www\.googletagmanager\.com\/gtag\/js/);
    tarteaucitron_block.unblock(/AW-/);
});
tarteaucitron_services["/google-analytics.com/ga.js/"] = 'gajs';
window.tarteaucitron_blacklist.push(/google-analytics\.com\/ga\.js/);
document.addEventListener("gajs_loaded", function() {
    tarteaucitron_block.unblock(/google-analytics\.com\/ga\.js/);
});
tarteaucitron_services["/google-analytics.com/analytics.js/"] = 'analytics';
window.tarteaucitron_blacklist.push(/google-analytics\.com\/analytics\.js/);
document.addEventListener("analytics_loaded", function() {
    tarteaucitron_block.unblock(/google-analytics\.com\/analytics\.js/);
});
tarteaucitron_services["/www.googletagmanager.com/gtag/js/"] = 'gtag';
window.tarteaucitron_blacklist.push(/www\.googletagmanager\.com\/gtag\/js/);
document.addEventListener("gtag_loaded", function() {
    tarteaucitron_block.unblock(/google-analytics\.com\/analytics\.js/);
    tarteaucitron_block.unblock(/google-analytics\.com\/ga\.js/);
    tarteaucitron_block.unblock(/www\.googletagmanager\.com\/gtag\/js/);
});
tarteaucitron_services["/recaptcha/api.js/"] = 'recaptcha';
window.tarteaucitron_blacklist.push(/recaptcha\/api\.js/);
document.addEventListener("recaptcha_loaded", function() {
    tarteaucitron_block.unblock(/recaptcha\/api\.js/);
});
tarteaucitron_services["/youtube.com/player_api/"] = 'youtubeapi';
window.tarteaucitron_blacklist.push(/youtube\.com\/player_api/);
document.addEventListener("youtubeapi_loaded", function() {
    tarteaucitron_block.unblock(/youtube\.com\/player_api/);
});
tarteaucitron_services["/www.google.com/maps/"] = 'googlemapssearch';
window.tarteaucitron_blacklist.push(/www\.google\.com\/maps/);
document.addEventListener("googlemapssearch_loaded", function() {
    tarteaucitron_block.unblock(/maps\.googleapis\.com/);
    tarteaucitron_block.unblock(/www\.google\.com\/maps/);
});
tarteaucitron_services["/maps.googleapis.com/"] = 'googlemaps';
window.tarteaucitron_blacklist.push(/maps\.googleapis\.com/);
document.addEventListener("googlemaps_loaded", function() {
    tarteaucitron_block.unblock(/www\.google\.com\/maps/);
    tarteaucitron_block.unblock(/maps\.googleapis\.com/);
});
tarteaucitron_services["/maps.google.com/"] = 'googlemaps';
window.tarteaucitron_blacklist.push(/maps\.google\.com/);
document.addEventListener("googlemaps_loaded", function() {
    tarteaucitron_block.unblock(/maps\.google\.com/);
});
tarteaucitron_services["/www.google_tagmanager.com/gtm.js/"] = 'multiplegoogletagmanager';
window.tarteaucitron_blacklist.push(/www\.google_tagmanager\.com\/gtm\.js/);
document.addEventListener("multiplegoogletagmanager_loaded", function() {
    tarteaucitron_block.unblock(/www\.google_tagmanager\.com\/gtm\.js/);
});
tarteaucitron_services["/apis.google._com/js/"] = 'gplus';
window.tarteaucitron_blacklist.push(/apis\.google\._com\/js/);
document.addEventListener("gplus_loaded", function() {
    tarteaucitron_block.unblock(/apis\.google\._com\/js/);
});
tarteaucitron_services["/www.google.com/jsapi/"] = 'jsapi';
window.tarteaucitron_blacklist.push(/www\.google\.com\/jsapi/);
document.addEventListener("jsapi_loaded", function() {
    tarteaucitron_block.unblock(/www\.google\.com\/jsapi/);
});
tarteaucitron_services["/platform.linkedin.com/in.js/"] = 'linkedin';
window.tarteaucitron_blacklist.push(/platform\.linkedin\.com\/in\.js/);
document.addEventListener("linkedin_loaded", function() {
    tarteaucitron_block.unblock(/platform\.linkedin\.com\/in\.js/);
});
tarteaucitron_services["/assets.pinterest.com/"] = 'pinterest';
window.tarteaucitron_blacklist.push(/assets\.pinterest\.com/);
document.addEventListener("pinterest_loaded", function() {
    tarteaucitron_block.unblock(/assets\.pinterest\.com/);
});
tarteaucitron_services["/flex.atdmt.com/"] = 'microsoftcampaignanalytics';
window.tarteaucitron_blacklist.push(/flex\.atdmt\.com/);
document.addEventListener("microsoftcampaignanalytics_loaded", function() {
    tarteaucitron_block.unblock(/flex\.atdmt\.com/);
});
tarteaucitron_services["/promo.easy-dating.org/"] = 'prelinker';
window.tarteaucitron_blacklist.push(/promo\.easy-dating\.org/);
document.addEventListener("prelinker_loaded", function() {
    tarteaucitron_block.unblock(/promo\.easy-dating\.org/);
});
tarteaucitron_services["/prezi.com/embed/"] = 'prezi';
window.tarteaucitron_blacklist.push(/prezi\.com\/embed/);
document.addEventListener("prezi_loaded", function() {
    tarteaucitron_block.unblock(/prezi\.com\/embed/);
});
tarteaucitron_services["/mc.yandex.ru/"] = 'metrica';
window.tarteaucitron_blacklist.push(/mc\.yandex\.ru/);
document.addEventListener("metrica_loaded", function() {
    tarteaucitron_block.unblock(/mc\.yandex\.ru/);
});
tarteaucitron_services["/pubdirecte.com/"] = 'pubdirecte';
window.tarteaucitron_blacklist.push(/pubdirecte\.com/);
document.addEventListener("pubdirecte_loaded", function() {
    tarteaucitron_block.unblock(/pubdirecte\.com/);
});
tarteaucitron_services["/app.purechat.com/"] = 'purechat';
window.tarteaucitron_blacklist.push(/app\.purechat\.com/);
document.addEventListener("purechat_loaded", function() {
    tarteaucitron_block.unblock(/app\.purechat\.com/);
});
tarteaucitron_services["/embed.tawk.to/"] = 'tawkto';
window.tarteaucitron_blacklist.push(/embed\.tawk\.to/);
document.addEventListener("tawkto_loaded", function() {
    tarteaucitron_block.unblock(/embed\.tawk\.to/);
});
tarteaucitron_services["/shareaholic.js/"] = 'shareaholic';
window.tarteaucitron_blacklist.push(/shareaholic\.js/);
document.addEventListener("shareaholic_loaded", function() {
    tarteaucitron_block.unblock(/shareaholic\.js/);
});
tarteaucitron_services["/shareasale.com/"] = 'shareasale';
window.tarteaucitron_blacklist.push(/shareasale\.com/);
document.addEventListener("shareasale_loaded", function() {
    tarteaucitron_block.unblock(/shareasale\.com/);
});
tarteaucitron_services["/w.sharethis.com/"] = 'sharethis';
window.tarteaucitron_blacklist.push(/w\.sharethis\.com/);
document.addEventListener("sharethis_loaded", function() {
    tarteaucitron_block.unblock(/w\.sharethis\.com/);
});
tarteaucitron_services["/slideshare.net/"] = 'slideshare';
window.tarteaucitron_blacklist.push(/slideshare\.net/);
document.addEventListener("slideshare_loaded", function() {
    tarteaucitron_block.unblock(/slideshare\.net/);
});
tarteaucitron_services["/statcounter.com/"] = 'statcounter';
window.tarteaucitron_blacklist.push(/statcounter\.com/);
document.addEventListener("statcounter_loaded", function() {
    tarteaucitron_block.unblock(/statcounter\.com/);
});
tarteaucitron_services["/cdn.knightlab.com/"] = 'timelinejs';
window.tarteaucitron_blacklist.push(/cdn\.knightlab\.com/);
document.addEventListener("timelinejs_loaded", function() {
    tarteaucitron_block.unblock(/cdn\.knightlab\.com/);
});
tarteaucitron_services["/use.typekit.net/"] = 'typekit';
window.tarteaucitron_blacklist.push(/use\.typekit\.net/);
document.addEventListener("typekit_loaded", function() {
    tarteaucitron_block.unblock(/use\.typekit\.net/);
});
tarteaucitron_services["/tracker.twenga/"] = 'twenga';
window.tarteaucitron_blacklist.push(/tracker\.twenga/);
document.addEventListener("twenga_loaded", function() {
    tarteaucitron_block.unblock(/tracker\.twenga/);
});
tarteaucitron_services["/platform.twitter.com/"] = 'twitter';
window.tarteaucitron_blacklist.push(/platform\.twitter\.com/);
document.addEventListener("twitter_loaded", function() {
    tarteaucitron_block.unblock(/platform\.twitter\.com/);
});
tarteaucitron_services["/widget.uservoice.com/"] = 'uservoice';
window.tarteaucitron_blacklist.push(/widget\.uservoice\.com/);
document.addEventListener("uservoice_loaded", function() {
    tarteaucitron_block.unblock(/widget\.uservoice\.com/);
});
tarteaucitron_services["/player.vimeo.com/"] = 'vimeo';
window.tarteaucitron_blacklist.push(/player\.vimeo\.com/);
document.addEventListener("vimeo_loaded", function() {
    tarteaucitron_block.unblock(/player\.vimeo\.com/);
});
tarteaucitron_services["/a.visualrevenue.com/"] = 'visualrevenue';
window.tarteaucitron_blacklist.push(/a\.visualrevenue\.com/);
document.addEventListener("visualrevenue_loaded", function() {
    tarteaucitron_block.unblock(/a\.visualrevenue\.com/);
});
tarteaucitron_services["/vshop.fr/"] = 'vshop';
window.tarteaucitron_blacklist.push(/vshop\.fr/);
document.addEventListener("vshop_loaded", function() {
    tarteaucitron_block.unblock(/vshop\.fr/);
});
tarteaucitron_services["/wysistat.com/statistique.js/"] = 'wysistat';
window.tarteaucitron_blacklist.push(/wysistat\.com\/statistique\.js/);
document.addEventListener("wysistat_loaded", function() {
    tarteaucitron_block.unblock(/wysistat\.com\/statistique\.js/);
});
tarteaucitron_services["/hs-scripts.com/"] = 'hubspot';
window.tarteaucitron_blacklist.push(/hs-scripts\.com/);
document.addEventListener("hubspot_loaded", function() {
    tarteaucitron_block.unblock(/hs-scripts\.com/);
});
tarteaucitron_services["/smarttag.js/"] = 'atinternet';
window.tarteaucitron_blacklist.push(/smarttag\.js/);
document.addEventListener("atinternet_loaded", function() {
    tarteaucitron_block.unblock(/smarttag\.js/);
});
tarteaucitron_services["/xtcore.js/"] = 'atinternet';
window.tarteaucitron_blacklist.push(/xtcore\.js/);
document.addEventListener("atinternet_loaded", function() {
    tarteaucitron_block.unblock(/xtcore\.js/);
});
tarteaucitron_services["/s.yimg.com/wi/ytc.js/"] = 'verizondottag';
window.tarteaucitron_blacklist.push(/s\.yimg\.com\/wi\/ytc\.js/);
document.addEventListener("verizondottag_loaded", function() {
    tarteaucitron_block.unblock(/s\.yimg\.com\/wi\/ytc\.js/);
});
tarteaucitron_services["/static.ads-twitter.com/"] = 'twitteruwt';
window.tarteaucitron_blacklist.push(/static\.ads-twitter\.com/);
document.addEventListener("twitteruwt_loaded", function() {
    tarteaucitron_block.unblock(/static\.ads-twitter\.com/);
});
tarteaucitron_services["/ads.linkedin.com/"] = 'linkedininsighttag';
window.tarteaucitron_blacklist.push(/ads\.linkedin\.com/);
document.addEventListener("linkedininsighttag_loaded", function() {
    tarteaucitron_block.unblock(/ads\.linkedin\.com/);
});
tarteaucitron_services["/.licdn.com/"] = 'linkedininsighttag';
window.tarteaucitron_blacklist.push(/\.licdn\.com/);
document.addEventListener("linkedininsighttag_loaded", function() {
    tarteaucitron_block.unblock(/\.licdn\.com/);
});
tarteaucitron_services["/kameleoon.eu/"] = 'kameleoon';
window.tarteaucitron_blacklist.push(/kameleoon\.eu/);
document.addEventListener("kameleoon_loaded", function() {
    tarteaucitron_block.unblock(/kameleoon\.eu/);
});
tarteaucitron_services["/xiti.com/"] = 'xiti';
window.tarteaucitron_blacklist.push(/xiti\.com/);
document.addEventListener("xiti_loaded", function() {
    tarteaucitron_block.unblock(/xiti\.com/);
});
tarteaucitron_services["/player.ausha.co/"] = 'ausha';
window.tarteaucitron_blacklist.push(/player\.ausha\.co/);
document.addEventListener("ausha_loaded", function() {
    tarteaucitron_block.unblock(/player\.ausha\.co/);
});
tarteaucitron_services["/zopim.com/"] = 'zopim';
window.tarteaucitron_blacklist.push(/zopim\.com/);
document.addEventListener("zopim_loaded", function() {
    tarteaucitron_block.unblock(/zopim\.com/);
});
tarteaucitron_services["/trackcmp.net/"] = 'activecampaign';
window.tarteaucitron_blacklist.push(/trackcmp\.net/);
document.addEventListener("activecampaign_loaded", function() {
    tarteaucitron_block.unblock(/trackcmp\.net/);
});
tarteaucitron_services["/track.adform.net/"] = 'adform';
window.tarteaucitron_blacklist.push(/track\.adform\.net/);
document.addEventListener("adform_loaded", function() {
    tarteaucitron_block.unblock(/track\.adform\.net/);
});
var tarteaucitronExpireInDay = true,
    tarteaucitronForceExpire = 365;
var tarteaucitronIsMagicPossible = true;
var tarteaucitronStatsEnabled = true;
tarteaucitronForceCDN = "https://cdn.tarteaucitron.io/";
tarteaucitronUseMin = true;
var scripts = document.getElementsByTagName("script"),
    tarteaucitronPath = (document.currentScript || scripts[scripts.length - 1]).src.split("?")[0],
    tarteaucitronForceCDN = tarteaucitronForceCDN === undefined ? "" : tarteaucitronForceCDN,
    tarteaucitronUseMin = tarteaucitronUseMin === undefined ? "" : tarteaucitronUseMin,
    cdn = tarteaucitronForceCDN === "" ? tarteaucitronPath.split("/").slice(0, -1).join("/") + "/" : tarteaucitronForceCDN,
    alreadyLaunch = alreadyLaunch === undefined ? 0 : alreadyLaunch,
    tarteaucitronForceLanguage = tarteaucitronForceLanguage === undefined ? "" : tarteaucitronForceLanguage,
    tarteaucitronForceExpire = tarteaucitronForceExpire === undefined ? "" : tarteaucitronForceExpire,
    tarteaucitronCustomText = tarteaucitronCustomText === undefined ? "" : tarteaucitronCustomText,
    tarteaucitronExpireInDay = tarteaucitronExpireInDay === undefined || typeof tarteaucitronExpireInDay !== "boolean" ? true : tarteaucitronExpireInDay,
    timeExpire = 31536e6,
    tarteaucitronProLoadServices, tarteaucitronNoAdBlocker = false,
    tarteaucitronIsLoaded = false;
var tarteaucitron = {
    version: 1.17,
    cdn: cdn,
    user: {},
    lang: {},
    services: {},
    added: [],
    idprocessed: [],
    state: {},
    launch: [],
    parameters: {},
    isAjax: false,
    reloadThePage: false,
    events: {
        init: function() {},
        load: function() {}
    },
    init: function(params) {
        "use strict";
        var origOpen;
        tarteaucitron.parameters = params;
        if (alreadyLaunch === 0) {
            alreadyLaunch = 1;
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    tarteaucitron.initEvents.loadEvent(false)
                }, false);
                window.addEventListener("scroll", function() {
                    tarteaucitron.initEvents.scrollEvent()
                }, false);
                window.addEventListener("keydown", function(evt) {
                    tarteaucitron.initEvents.keydownEvent(false, evt)
                }, false);
                window.addEventListener("hashchange", function() {
                    tarteaucitron.initEvents.hashchangeEvent()
                }, false);
                window.addEventListener("resize", function() {
                    tarteaucitron.initEvents.resizeEvent()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    tarteaucitron.initEvents.loadEvent(true)
                });
                window.attachEvent("onscroll", function() {
                    tarteaucitron.initEvents.scrollEvent()
                });
                window.attachEvent("onkeydown", function(evt) {
                    tarteaucitron.initEvents.keydownEvent(true, evt)
                });
                window.attachEvent("onhashchange", function() {
                    tarteaucitron.initEvents.hashchangeEvent()
                });
                window.attachEvent("onresize", function() {
                    tarteaucitron.initEvents.resizeEvent()
                })
            }
            if (typeof XMLHttpRequest !== "undefined") {
                origOpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function() {
                    if (window.addEventListener) {
                        this.addEventListener("load", function() {
                            if (typeof tarteaucitronProLoadServices === "function") {
                                tarteaucitronProLoadServices()
                            }
                        }, false)
                    } else if (typeof this.attachEvent !== "undefined") {
                        this.attachEvent("onload", function() {
                            if (typeof tarteaucitronProLoadServices === "function") {
                                tarteaucitronProLoadServices()
                            }
                        })
                    } else {
                        if (typeof tarteaucitronProLoadServices === "function") {
                            setTimeout(tarteaucitronProLoadServices, 1e3)
                        }
                    }
                    try {
                        origOpen.apply(this, arguments)
                    } catch (err) {}
                }
            }
        }
        if (tarteaucitron.events.init) {
            tarteaucitron.events.init()
        }
    },
    initEvents: {
        loadEvent: function(isOldBrowser) {
            tarteaucitron.load();
            tarteaucitron.fallback(["tarteaucitronOpenPanel"], function(elem) {
                if (isOldBrowser) {
                    elem.attachEvent("onclick", function(event) {
                        tarteaucitron.userInterface.openPanel();
                        event.preventDefault()
                    })
                } else {
                    elem.addEventListener("click", function(event) {
                        tarteaucitron.userInterface.openPanel();
                        event.preventDefault()
                    }, false)
                }
            }, true)
        },
        keydownEvent: function(isOldBrowser, evt) {
            if (evt.keyCode === 27) {
                tarteaucitron.userInterface.closePanel()
            }
            if (isOldBrowser) {
                if (evt.keyCode === 9 && focusableEls.indexOf(evt.target) >= 0) {
                    if (evt.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            evt.preventDefault()
                        }
                    } else {
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            evt.preventDefault()
                        }
                    }
                }
            }
        },
        hashchangeEvent: function() {
            if (document.location.hash === tarteaucitron.hashtag && tarteaucitron.hashtag !== "") {
                tarteaucitron.userInterface.openPanel()
            }
        },
        resizeEvent: function() {
            var tacElem = document.getElementById("tarteaucitron");
            var tacCookieContainer = document.getElementById("tarteaucitronCookiesListContainer");
            if (tacElem && tacElem.style.display === "block") {
                tarteaucitron.userInterface.jsSizing("main")
            }
            if (tacCookieContainer && tacCookieContainer.style.display === "block") {
                tarteaucitron.userInterface.jsSizing("cookie")
            }
        },
        scrollEvent: function() {
            var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
            var heightPosition;
            var tacPercentage = document.getElementById("tarteaucitronPercentage");
            var tacAlertBig = document.getElementById("tarteaucitronAlertBig");
            if (tacAlertBig && !tarteaucitron.highPrivacy) {
                if (tacAlertBig.style.display === "block") {
                    heightPosition = tacAlertBig.offsetHeight + "px";
                    if (scrollPos > screen.height * 2) {
                        tarteaucitron.userInterface.respondAll(true)
                    } else if (scrollPos > screen.height / 2) {
                        document.getElementById("tarteaucitronDisclaimerAlert").innerHTML = "<strong>" + tarteaucitron.lang.alertBigScroll + "</strong> " + tarteaucitron.lang.alertBig
                    }
                    if (tacPercentage) {
                        if (tarteaucitron.orientation === "top") {
                            tacPercentage.style.top = heightPosition
                        } else {
                            tacPercentage.style.bottom = heightPosition
                        }
                        tacPercentage.style.width = 100 / (screen.height * 2) * scrollPos + "%"
                    }
                }
            }
        }
    },
    load: function() {
        "use strict";
        if (tarteaucitronIsLoaded === true) {
            return
        }
        var cdn = tarteaucitron.cdn,
            language = tarteaucitron.getLanguage(),
            useMinifiedJS = cdn.indexOf("cdn.jsdelivr.net") >= 0 || tarteaucitronPath.indexOf(".min.") >= 0 || tarteaucitronUseMin !== "",
            pathToLang = cdn + "lang/tarteaucitron." + language + (useMinifiedJS ? ".min" : "") + ".js",
            pathToServices = cdn + "tarteaucitron.services" + (useMinifiedJS ? ".min" : "") + ".js",
            linkElement = document.createElement("link"),
            defaults = {
                adblocker: false,
                hashtag: "#tarteaucitron",
                cookieName: "tarteaucitron",
                highPrivacy: true,
                orientation: "middle",
                bodyPosition: "bottom",
                removeCredit: false,
                showAlertSmall: false,
                showDetailsOnClick: true,
                showIcon: true,
                iconPosition: "BottomRight",
                cookieslist: false,
                handleBrowserDNTRequest: false,
                DenyAllCta: true,
                AcceptAllCta: true,
                moreInfoLink: true,
                privacyUrl: "",
                useExternalCss: false,
                useExternalJs: false,
                mandatory: true,
                mandatoryCta: true,
                closePopup: false,
                groupServices: false,
                serviceDefaultState: "wait",
                googleConsentMode: true,
                partnersList: false
            },
            params = tarteaucitron.parameters;
        tarteaucitronIsLoaded = true;
        if ((tarteaucitron.parameters.readmoreLink !== undefined && window.location.href == tarteaucitron.parameters.readmoreLink || window.location.href == tarteaucitron.parameters.privacyUrl) && tarteaucitron.parameters.orientation == "middle") {
            tarteaucitron.parameters.orientation = "bottom"
        }
        if (typeof tarteaucitronCustomPremium !== "undefined") {
            tarteaucitronCustomPremium()
        }
        if (params !== undefined) {
            for (var k in defaults) {
                if (!tarteaucitron.parameters.hasOwnProperty(k)) {
                    tarteaucitron.parameters[k] = defaults[k]
                }
            }
        }
        tarteaucitron.orientation = tarteaucitron.parameters.orientation;
        tarteaucitron.hashtag = tarteaucitron.parameters.hashtag;
        tarteaucitron.highPrivacy = tarteaucitron.parameters.highPrivacy;
        tarteaucitron.handleBrowserDNTRequest = tarteaucitron.parameters.handleBrowserDNTRequest;
        tarteaucitron.customCloserId = tarteaucitron.parameters.customCloserId;
        if (tarteaucitron.parameters.googleConsentMode === true) {
            window.dataLayer = window.dataLayer || [];
            window.tac_gtag = function tac_gtag() {
                dataLayer.push(arguments)
            };
            window.tac_gtag("consent", "default", {
                ad_storage: "denied",
                analytics_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                wait_for_update: 800
            });
            document.addEventListener("googleads_added", function() {
                if (tarteaucitron.added["gcmads"] === true) {
                    return
                }
                tarteaucitron.services.gcmads = {
                    key: "gcmads",
                    type: "ads",
                    name: "Google Ads (personalized ads)",
                    uri: "https://support.google.com/analytics/answer/9976101",
                    needConsent: true,
                    cookies: [],
                    js: function() {},
                    fallback: function() {}
                };
                tarteaucitron.job.push("gcmads");
                var i, allowBtns = document.getElementsByClassName("tarteaucitronAllow"),
                    denyBtns = document.getElementsByClassName("tarteaucitronDeny");
                for (i = 0; i < allowBtns.length; i++) {
                    tarteaucitron.addClickEventToElement(allowBtns[i], function() {
                        tarteaucitron.userInterface.respond(this, true)
                    })
                }
                for (i = 0; i < denyBtns.length; i++) {
                    tarteaucitron.addClickEventToElement(denyBtns[i], function() {
                        tarteaucitron.userInterface.respond(this, false)
                    })
                }
            });
            document.addEventListener("gcmads_allowed", function() {
                tarteaucitron.setConsent("googleads", true)
            });
            document.addEventListener("gcmads_loaded", function() {
                window.tac_gtag("consent", "update", {
                    ad_user_data: "granted",
                    ad_personalization: "granted"
                })
            });
            document.addEventListener("gcmads_allowed", function() {
                window.tac_gtag("consent", "update", {
                    ad_user_data: "granted",
                    ad_personalization: "granted"
                })
            });
            document.addEventListener("gcmads_disallowed", function() {
                window.tac_gtag("consent", "update", {
                    ad_user_data: "denied",
                    ad_personalization: "denied"
                })
            });
            document.addEventListener("googleads_loaded", function() {
                window.tac_gtag("consent", "update", {
                    ad_storage: "granted"
                })
            });
            document.addEventListener("googleads_allowed", function() {
                window.tac_gtag("consent", "update", {
                    ad_storage: "granted"
                })
            });
            document.addEventListener("googleads_disallowed", function() {
                tarteaucitron.setConsent("gcmads", false);
                window.tac_gtag("consent", "update", {
                    ad_storage: "denied"
                })
            });
            document.addEventListener("gtag_loaded", function() {
                window.tac_gtag("consent", "update", {
                    analytics_storage: "granted"
                })
            });
            document.addEventListener("gtag_allowed", function() {
                window.tac_gtag("consent", "update", {
                    analytics_storage: "granted"
                })
            });
            document.addEventListener("gtag_disallowed", function() {
                window.tac_gtag("consent", "update", {
                    analytics_storage: "denied"
                })
            });
            window.addEventListener("tac.root_available", function() {
                if (typeof tarteaucitron_block !== "undefined") {
                    tarteaucitron_block.unblock(/www\.googletagmanager\.com\/gtag\/js/);
                    tarteaucitron_block.unblock(/www\.googleadservices\.com\/pagead\/conversion/);
                    tarteaucitron_block.unblock(/AW-/);
                    tarteaucitron_block.unblock(/google-analytics\.com\/analytics\.js/);
                    tarteaucitron_block.unblock(/google-analytics\.com\/ga\.js/)
                }
            })
        }
        if (!tarteaucitron.parameters.useExternalCss) {
            linkElement.rel = "stylesheet";
            linkElement.type = "text/css";
            linkElement.href = cdn + "css/tarteaucitron" + (useMinifiedJS ? ".min" : "") + ".css";
            document.getElementsByTagName("head")[0].appendChild(linkElement)
        }
        tarteaucitron.addInternalScript(pathToLang, "", function() {
            if (tarteaucitronCustomText !== "") {
                tarteaucitron.lang = tarteaucitron.AddOrUpdate(tarteaucitron.lang, tarteaucitronCustomText)
            }
            tarteaucitron.addInternalScript(pathToServices, "", function() {
                if (tarteaucitron.orientation === "middle") {
                    var customThemeMiddle = document.createElement("style"),
                        cssRuleMiddle = "div#tarteaucitronRoot.tarteaucitronBeforeVisible:before {content: '';position: fixed;width: 100%;height: 100%;background: white;top: 0;left: 0;z-index: 999;opacity: 0.5;}div#tarteaucitronAlertBig:before {content: '" + tarteaucitron.lang.middleBarHead + "';font-size: 35px;}body #tarteaucitronRoot div#tarteaucitronAlertBig {width: 60%;min-width: 285px;height: auto;margin: auto;left: 50%;top: 50%;transform: translate(-50%, -50%);box-shadow: 0 0 9000px #000;border-radius: 20px;padding: 35px 25px;}span#tarteaucitronDisclaimerAlert {padding: 0 30px;}#tarteaucitronRoot span#tarteaucitronDisclaimerAlert {margin: 10px 0 30px;display: block;text-align: center;font-size: 21px;}@media screen and (max-width: 900px) {div#tarteaucitronAlertBig button {margin: 0 auto 10px!important;display: block!important;}}";
                    customThemeMiddle.type = "text/css";
                    if (customThemeMiddle.styleSheet) {
                        customThemeMiddle.styleSheet.cssText = cssRuleMiddle
                    } else {
                        customThemeMiddle.appendChild(document.createTextNode(cssRuleMiddle))
                    }
                    document.getElementsByTagName("head")[0].appendChild(customThemeMiddle)
                }
                if (tarteaucitron.parameters.groupServices == true) {
                    tarteaucitron.parameters.showDetailsOnClick = true
                }
                if (tarteaucitron.orientation === "popup") {
                    var customThemePopup = document.createElement("style"),
                        cssRulePopup = "div#tarteaucitronAlertBig:before {content: '" + tarteaucitron.lang.middleBarHead + "';font-size: 22px;}body #tarteaucitronRoot div#tarteaucitronAlertBig {bottom: 0;top: auto!important;left: 8px!important;right: auto!important;transform: initial!important;border-radius: 5px 5px 0 0!important;max-width: 250px!important;width: calc(100% - 16px)!important;min-width: 0!important;padding: 25px 0;}span#tarteaucitronDisclaimerAlert {padding: 0 30px;font-size: 15px!important;}#tarteaucitronRoot span#tarteaucitronDisclaimerAlert {margin: 10px 0 30px;display: block;text-align: center;font-size: 21px;}div#tarteaucitronAlertBig button {margin: 0 auto 10px!important;display: block!important;width: calc(100% - 60px);box-sizing: border-box;}";
                    customThemePopup.type = "text/css";
                    if (customThemePopup.styleSheet) {
                        customThemePopup.styleSheet.cssText = cssRulePopup
                    } else {
                        customThemePopup.appendChild(document.createTextNode(cssRulePopup))
                    }
                    document.getElementsByTagName("head")[0].appendChild(customThemePopup)
                }
                var body = document.body,
                    div = document.createElement("div"),
                    html = "",
                    index, orientation = "Top",
                    modalAttrs = "",
                    cat = ["ads", "analytic", "api", "comment", "social", "support", "video", "other", "google"],
                    i;
                cat = cat.sort(function(a, b) {
                    if (tarteaucitron.lang[a].title > tarteaucitron.lang[b].title) {
                        return 1
                    }
                    if (tarteaucitron.lang[a].title < tarteaucitron.lang[b].title) {
                        return -1
                    }
                    return 0
                });
                html += '<div role="heading" aria-level="1" id="tac_title" class="tac_visually-hidden">' + tarteaucitron.lang.title + "</div>";
                html += '<div id="tarteaucitronPremium"></div>';
                if (tarteaucitron.reloadThePage) {
                    html += '<button type="button" id="tarteaucitronBack" aria-label="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')" title="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')"></button>'
                } else {
                    html += '<button type="button" id="tarteaucitronBack" aria-label="' + tarteaucitron.lang.close + '" title="' + tarteaucitron.lang.close + '"></button>'
                }
                html += '<div id="tarteaucitron" role="dialog" aria-modal="true" aria-labelledby="dialogTitle" tabindex="-1">';
                if (tarteaucitron.reloadThePage) {
                    html += '   <button type="button" id="tarteaucitronClosePanel" aria-label="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')" title="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')">'
                } else {
                    html += '   <button type="button" id="tarteaucitronClosePanel">'
                }
                html += "       " + tarteaucitron.lang.close;
                html += "   </button>";
                html += '   <div id="tarteaucitronServices">';
                html += '      <div class="tarteaucitronLine tarteaucitronMainLine" id="tarteaucitronMainLineOffset">';
                html += '         <span class="tarteaucitronH1" role="heading" aria-level="1" id="dialogTitle">' + tarteaucitron.lang.title + "</span>";
                html += '         <div id="tarteaucitronInfo">';
                html += "         " + tarteaucitron.lang.disclaimer;
                if (tarteaucitron.parameters.privacyUrl !== "") {
                    html += "   <br/><br/>";
                    html += '   <button type="button" id="tarteaucitronPrivacyUrlDialog" role="link">';
                    html += "       " + tarteaucitron.lang.privacyUrl;
                    html += "   </button>"
                }
                html += "         </div>";
                html += '         <div class="tarteaucitronName">';
                html += '            <span class="tarteaucitronH2" role="heading" aria-level="2">' + tarteaucitron.lang.all + "</span>";
                html += "         </div>";
                html += '         <div class="tarteaucitronAsk" id="tarteaucitronScrollbarAdjust">';
                html += '            <button type="button" id="tarteaucitronAllAllowed" class="tarteaucitronAllow">';
                html += '               <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.allowAll;
                html += "            </button> ";
                html += '            <button type="button" id="tarteaucitronAllDenied" class="tarteaucitronDeny">';
                html += '               <span class="tarteaucitronCross" aria-hidden="true"></span> ' + tarteaucitron.lang.denyAll;
                html += "            </button>";
                html += "         </div>";
                html += "      </div>";
                html += '      <div class="tarteaucitronBorder">';
                html += '         <div class="clear"></div><ul>';
                if (tarteaucitron.parameters.mandatory == true) {
                    html += '<li id="tarteaucitronServicesTitle_mandatory">';
                    html += '<div class="tarteaucitronTitle">';
                    if (tarteaucitron.parameters.showDetailsOnClick) {
                        html += '   <button type="button" tabindex="-1"><span class="tarteaucitronPlus" aria-hidden="true"></span> ' + tarteaucitron.lang.mandatoryTitle + "</button>"
                    } else {
                        html += '   <span class="asCatToggleBtn">' + tarteaucitron.lang.mandatoryTitle + "</span>"
                    }
                    html += "</div>";
                    html += '<ul id="tarteaucitronServices_mandatory">';
                    html += '<li class="tarteaucitronLine">';
                    html += '   <div class="tarteaucitronName">';
                    html += '       <span class="tarteaucitronH3" role="heading" aria-level="3">' + tarteaucitron.lang.mandatoryText + "</span>";
                    html += '       <span class="tarteaucitronListCookies" aria-hidden="true"></span><br/>';
                    html += "   </div>";
                    if (tarteaucitron.parameters.mandatoryCta == true) {
                        html += '   <div class="tarteaucitronAsk">';
                        html += '       <button type="button" class="tarteaucitronAllow" tabindex="-1" disabled>';
                        html += '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.allow;
                        html += "       </button> ";
                        html += '       <button type="button" class="tarteaucitronDeny" style="visibility:hidden" tabindex="-1">';
                        html += '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' + tarteaucitron.lang.deny;
                        html += "       </button> ";
                        html += "   </div>"
                    }
                    html += "</li>";
                    html += "</ul></li>"
                }
                for (i = 0; i < cat.length; i += 1) {
                    html += '         <li id="tarteaucitronServicesTitle_' + cat[i] + '" class="tarteaucitronHidden">';
                    html += '            <div class="tarteaucitronTitle" role="heading" aria-level="2">';
                    if (tarteaucitron.parameters.showDetailsOnClick) {
                        html += '               <button type="button" class="catToggleBtn" aria-expanded="false" data-cat="tarteaucitronDetails' + cat[i] + '"><span class="tarteaucitronPlus" aria-hidden="true"></span> ' + tarteaucitron.lang[cat[i]].title + "</button>"
                    } else {
                        html += '               <span class="asCatToggleBtn" data-cat="tarteaucitronInlineDetails' + cat[i] + '">' + tarteaucitron.lang[cat[i]].title + "</span>"
                    }
                    html += "            </div>";
                    html += '            <div id="tarteaucitronDetails' + cat[i] + '" class="tarteaucitronDetails ' + (tarteaucitron.parameters.showDetailsOnClick ? "tarteaucitronInfoBox" : "tarteaucitronDetailsInline") + '">';
                    html += "               " + tarteaucitron.lang[cat[i]].details;
                    html += "            </div>";
                    html += '         <ul id="tarteaucitronServices_' + cat[i] + '"></ul></li>'
                }
                html += '             <li id="tarteaucitronNoServicesTitle" class="tarteaucitronLine">' + tarteaucitron.lang.noServices + "</li>";
                html += "         </ul>";
                html += '         <div class="tarteaucitronHidden tarteaucitron-spacer-20" id="tarteaucitronScrollbarChild"></div>';
                if (tarteaucitron.parameters.removeCredit === false) {
                    html += '     <a class="tarteaucitronSelfLink" href="https://tarteaucitron.io/" rel="nofollow noreferrer noopener" target="_blank" title="tarteaucitron ' + tarteaucitron.lang.newWindow + '"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAeCAYAAAAWwoEYAAADl0lEQVRoge1Y0W3bQAx9CjKARlC+9GVUmqDJBHEmiDyB6wkcTxBngtgTxJ0gzgQW4C/9aYOmE6g4lTQo+k6y3Rb94QOERNQd+cjj8XiGwWAwGAwGg8FgMBgMBoPB8F8RNRXe+whEKe7c36ZCAeCRxC9Rig2PUd8kPgAsoxSfQ3YAzAA8D/HwYYCb05kBKKO0teFkmbC1jlKsAnq/Abjn+QBqAIsoRS30ttwG/HNz1wH/XIxWTicLdvtW7xTAGEAMtP685CNsBTe2d/BLydfXAG57SEnMAST0zgYZSUCPk02bCvkJduIzuJzDLfPolbY+tLKmar+/8+IRePy4qdpE03qHuH8fipFb4N2+XdA3AJ/0vaQxt7s9FvkIS2XvtqnwM0rxpOQfbnE5G2LhTCmUO2fHIngOmcv+KG3HafDchB6ntwjYqenR2PqC7sOZ3E7FXHB0vqxoFyUyLh7OEH7LOGouvhhN3eIBeKXv0n5MsufdHqXcwYR5U2EbpV35lSspVPJmQj4TcgRK7jTg5IzmPUhhwM5a2WHUFCx+NgiDucmgh7idikLovHFlL0pxQ9xzX+IIP9Y6FrJsqhjlQpZRAkFVDCjZfcCHt6bqJDmuh5ylCWx0RVnk3oumaknqTH5sqrY0fBWyULaHUIgAgxb46MxV3DbieAhxOxUxjSuljig9lMQ/Bcfoi9BTEv9aLORSndVxYOH525sUDC6u2gWxcNzBNRxPanyh3ktKinOgy3WoxPbtUM0t6RkbQnzBnFPgi9GCOEubY9UffIryz9iKRe8s/FUfEWosJJGxagp85bpUO3VywQ46lOtAWfNxKwa4JXQ+628+bpxYGXXMzp5rXH401VEyXwIdowXFaKWSMFHvMTVmGnc+P3oXV2QOiBCfgex8QtcQCbcQE/H+eoHzrkFo1KM7zVO4jVVj5s6lRiWF7zyXyfRMc97J3tzj87mYqZ7E2YjzUct9GUi4tjHLR8dVkBLjQcuHFleWvQfRNEhFR7uX7pkctOwvZXsft7sAtyldEUIN2UTeLxnEfxKYswzdi88BdbZ8hifUoSMftQvP+muRwN6+Q3DeqqRExP9QmTtcheiHh0Ot1x2i2km1bP9pbufw5zZdyWsOrh7vQae5OZWbsMv30pi7cd/CKj3coPEVaCP4Zhx4eQWhOZ1Y9MTXGyP8/iGjEyfa1T4fO/4Lea9vBoPBYDAYDAaDwWAwGAwGwz8GgF8siXCCbrSRhgAAAABJRU5ErkJggg==" alt="tarteaucitron.io" /></a>'
                }
                html += "       </div>";
                html += "   </div>";
                html += "</div>";
                if (tarteaucitron.parameters.orientation === "bottom") {
                    orientation = "Bottom"
                }
                if (tarteaucitron.parameters.orientation === "middle" || tarteaucitron.parameters.orientation === "popup") {
                    modalAttrs = ' role="dialog" aria-modal="true" aria-labelledby="tac_title"'
                }
                if (tarteaucitron.parameters.highPrivacy && !tarteaucitron.parameters.AcceptAllCta) {
                    html += '<div tabindex="-1" id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' + orientation + '"' + modalAttrs + ">";
                    html += '   <span id="tarteaucitronDisclaimerAlert" role="paragraph">';
                    html += "       " + tarteaucitron.lang.alertBigPrivacy;
                    html += "   </span>";
                    html += '   <button type="button" id="tarteaucitronPersonalize" aria-label="' + tarteaucitron.lang.personalize + " " + tarteaucitron.lang.modalWindow + '" title="' + tarteaucitron.lang.personalize + " " + tarteaucitron.lang.modalWindow + '">';
                    html += "       " + tarteaucitron.lang.personalize;
                    html += "   </button>";
                    if (tarteaucitron.parameters.privacyUrl !== "") {
                        html += '   <button role="link" type="button" id="tarteaucitronPrivacyUrl">';
                        html += "       " + tarteaucitron.lang.privacyUrl;
                        html += "   </button>"
                    }
                    html += "</div>"
                } else {
                    html += '<div tabindex="-1" id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' + orientation + '"' + modalAttrs + ">";
                    html += '   <span id="tarteaucitronDisclaimerAlert" role="paragraph">';
                    if (tarteaucitron.parameters.highPrivacy) {
                        html += "       " + tarteaucitron.lang.alertBigPrivacy
                    } else {
                        html += "       " + tarteaucitron.lang.alertBigClick + " " + tarteaucitron.lang.alertBig
                    }
                    html += "   </span>";
                    html += '   <button type="button" class="tarteaucitronCTAButton tarteaucitronAllow" id="tarteaucitronPersonalize2">';
                    html += '       <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.acceptAll;
                    html += "   </button>";
                    if (tarteaucitron.parameters.DenyAllCta) {
                        if (tarteaucitron.reloadThePage) {
                            html += '   <button type="button" class="tarteaucitronCTAButton tarteaucitronDeny" id="tarteaucitronAllDenied2" aria-label="' + tarteaucitron.lang.denyAll + " (" + tarteaucitron.lang.reload + ')" title="' + tarteaucitron.lang.denyAll + " (" + tarteaucitron.lang.reload + ')">'
                        } else {
                            html += '   <button type="button" class="tarteaucitronCTAButton tarteaucitronDeny" id="tarteaucitronAllDenied2">'
                        }
                        html += '       <span class="tarteaucitronCross" aria-hidden="true"></span> ' + tarteaucitron.lang.denyAll;
                        html += "   </button>"
                    }
                    html += '   <button type="button" id="tarteaucitronCloseAlert" aria-label="' + tarteaucitron.lang.personalize + " " + tarteaucitron.lang.modalWindow + '" title="' + tarteaucitron.lang.personalize + " " + tarteaucitron.lang.modalWindow + '">';
                    html += "       " + tarteaucitron.lang.personalize;
                    html += "   </button>";
                    if (tarteaucitron.parameters.privacyUrl !== "") {
                        html += '   <button type="button" id="tarteaucitronPrivacyUrl" role="link">';
                        html += "       " + tarteaucitron.lang.privacyUrl;
                        html += "   </button>"
                    }
                    html += "</div>";
                    html += '<div id="tarteaucitronPercentage"></div>'
                }
                if (tarteaucitron.parameters.showIcon === true) {
                    html += '<div id="tarteaucitronIcon" class="tarteaucitronIcon' + tarteaucitron.parameters.iconPosition + '" style="display: block">';
                    html += '   <button type="button" id="tarteaucitronManager" aria-label="' + tarteaucitron.lang.icon + " " + tarteaucitron.lang.modalWindow + '" title="' + tarteaucitron.lang.icon + " " + tarteaucitron.lang.modalWindow + '">';
                    html += '       <img src="' + (tarteaucitron.parameters.iconSrc ? tarteaucitron.parameters.iconSrc : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAGA0lEQVRoge1a207bWBRdBtJwLYZhKDMVmlSK1LxNkPo+ZH6g8B6p5AuALwC+APoFoVLeoT8whPeRSt+CZKmZVu3AiIsRlEtCktGyjy8xzuXYhvahS0JJHJ/4rLP3XnuffcAPfGdQ7mM6jRLSAF4BxqsbewB2lRS2o35mpEQaJcwCyANIdLi1DGBNSWEzqmdHRqRRwjqAJclhtExOSUEP+/xIiDRKhhUWfL7ShTtBuJnqcw+/z4Ql0xNmMEwSSz4kuNIzSgpjSsqYJP/GeE185wYJroedRyiLNEpGLLzzrHSuk+83SgbxvOcyyRaDziWsRVZkSRDinpzPbwVGWIucuohsKynMS47fAQyls/BMSRmKJo3AFhG5wm2N1wF+Zs3zebbFfR0RxrXcJHQlgH+LMW616pR/WiIMEXfW3mtzXyeEGWsjKot8c4TOI98L+iKaR5PS6IUk88RLAO9F8UjrbYoYMOosNavpfmODIiwRXRR/G3ohaWVo1RU/c30jV8ab2mV8qVGzHWBOLyTLZiWs5Rolg/C3ySOi0tXP/k4aEwOwSBKPJs7Rp16ABJTe+p1xVX0It/owqqdDEMRoqd3RFxqDPh20Ig6VEPVC0i5RSCD+6wl6HlW7GksSlUMV11/GrUs5NasFLusDE9ELSVphXemtJwaT/8JyIRvxNNCfBmIiNdR04LII3DSrbe0yjqvyJF/ppptqVlt+MCLCEh/oOkPPP6N38Mb5cnQBGFsEqmXg5j3QMwoMzwGnr4HYbybBq13gZAOom/FO63zdf2qQArCsZrUN2TlJy69eSDKYV+6Q4MpP75ivHzPA53ngaBW4eGuSOt0A/lsGPmXMz0+3TFJcTfFbPfFbfnwlhON+iQhlWmA82CQ4ocQ7c6KcfL3DHuls0yT6Sx4YnLXJDCQOIRRv5yGIJBgP8Sdisj2qubpc5UGJmo+W49ifVmzL8HcpGhQPvZCUKiCliIhEN0tr2OCqHuSA8gwQ/92MkU7gxEmeVqGrTTgpxPXbUrtGWYus0I9thRIraagRQUIDf7Qn4yZhKRiFQIyhfMfUr3yblokVWSJ6k8xSnc7eNN/RjowfCYiFoDUFer1S3gW6JiJ8Nt30EMbEhU+vzSIztuRYjRLsR8IHLjlf7HZ+MrWWEXxNmbvapt4jGSqZRYSkGUetSNTPzHsui5YMQ2ajJUNks6mw4wT54Ok2ShnzzIPCUGshzawCRKy5FqvrTZe0RWzQGvw79m67XZjKmxJrLsICjtZa55gxXy+6F4sYsEtxTqhXdRTLC8ulSDaWoCLsolfN+8YUhOsJV709H7Cudr0LlVEtzqBcN+shEyThdR941OnAbF8pirKJqXyupTRTtQSReiVmXW1j7oBErB0d9xM2WEd5J9ZKYtuR4WKwwBSoORbpGrJ5ZI9lt71irJmGX1px0JYE26uNErawr2zfIcP4OHEKXm66PA3wjpCNEfpJunI4muifPjKvsFCkGjExTq63yxMJsZNMYF/J4HmDC5A3Yq36jy0ClePHVhwuu/b1HSFlEfHD5ZtD1bEK44Qu1mWys6tbWmZyPWckzlPTGiRw/XHCuk+q4Rek+mVrVL/UppwrdDEGNV2kpyuhccgc5Oxm9vWnn+19vJrVpLor0kTUrGacMplb1CfOFyTD4o9uNrHqr2Z+ZMSp1c2XcVSORnh9Q81q3k599ETgkNnjg0nGzi10K7rX+bZpHbrblPcY5A4Zxk2xcjzCvTpd9027Aa0QtouyyrKFRR6D/04DwkFGvHPXM3Qda/Jb4nPgI7hQLVM1q5HIBt2MzQNa57Z1DiiLAGa5Mi+O4Sz3Mpp6laPHO6InII3ITnX1QtI+EOX+m9ZxleOZ/j9PiuKoLi3aqXPuEoSye/Vhkm+LalbLtHhMS0R6zu7aZ3vP2jOjL7QVv4McxhcDnZIelAQibGIbULOapf3PuE1Vs9qeaOTdkVKr00gCQiw4NlBzDvf1Lxx+uP5r3Dgv5KQZRzWn+GRwz8jmDS8itUg7iB6vLuJCF5Uty4A9mVKkFR6MiJDachST/oHvHgD+B4SoUIitpF05AAAAAElFTkSuQmCC") + '" alt="' + tarteaucitron.lang.icon + " " + tarteaucitron.lang.modalWindow + '" title="' + tarteaucitron.lang.icon + " " + tarteaucitron.lang.modalWindow + '">';
                    html += "   </button>";
                    html += "</div>"
                }
                if (tarteaucitron.parameters.showAlertSmall === true) {
                    html += '<div id="tarteaucitronAlertSmall" class="tarteaucitronAlertSmall' + orientation + '">';
                    html += '   <button type="button" id="tarteaucitronManager" aria-label="' + tarteaucitron.lang.alertSmall + " " + tarteaucitron.lang.modalWindow + '" title="' + tarteaucitron.lang.alertSmall + " " + tarteaucitron.lang.modalWindow + '">';
                    html += "       " + tarteaucitron.lang.alertSmall;
                    html += '       <span id="tarteaucitronDot">';
                    html += '           <span id="tarteaucitronDotGreen"></span>';
                    html += '           <span id="tarteaucitronDotYellow"></span>';
                    html += '           <span id="tarteaucitronDotRed"></span>';
                    html += "       </span>";
                    if (tarteaucitron.parameters.cookieslist === true) {
                        html += "   </button>\x3c!-- @whitespace";
                        html += '   --\x3e<button type="button" id="tarteaucitronCookiesNumber" aria-expanded="false" aria-controls="tarteaucitronCookiesListContainer">0</button>';
                        html += '   <div id="tarteaucitronCookiesListContainer">';
                        if (tarteaucitron.reloadThePage) {
                            html += '       <button type="button" id="tarteaucitronClosePanelCookie" aria-label="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')" title="' + tarteaucitron.lang.close + " (" + tarteaucitron.lang.reload + ')">'
                        } else {
                            html += '       <button type="button" id="tarteaucitronClosePanelCookie">'
                        }
                        html += "           " + tarteaucitron.lang.close;
                        html += "       </button>";
                        html += '       <div class="tarteaucitronCookiesListMain" id="tarteaucitronCookiesTitle">';
                        html += '            <span class="tarteaucitronH2" role="heading" aria-level="2" id="tarteaucitronCookiesNumberBis">0 cookie</span>';
                        html += "       </div>";
                        html += '       <div id="tarteaucitronCookiesList"></div>';
                        html += "    </div>"
                    } else {
                        html += "   </div>"
                    }
                    html += "</div>"
                }
                tarteaucitron.addInternalScript(tarteaucitron.cdn + "advertising" + (useMinifiedJS ? ".min" : "") + ".js", "", function() {
                    if (tarteaucitronNoAdBlocker === true || tarteaucitron.parameters.adblocker === false) {
                        div.id = "tarteaucitronRoot";
                        if (tarteaucitron.parameters.bodyPosition === "top") {
                            var bodyFirstChild = body.firstChild;
                            body.insertBefore(div, bodyFirstChild)
                        } else {
                            body.appendChild(div, body)
                        }
                        div.setAttribute("data-nosnippet", "true");
                        div.setAttribute("lang", language);
                        div.setAttribute("role", "region");
                        div.setAttribute("aria-labelledby", "tac_title");
                        div.innerHTML = html;
                        var tacRootAvailableEvent;
                        if (typeof Event === "function") {
                            tacRootAvailableEvent = new Event("tac.root_available")
                        } else if (typeof document.createEvent === "function") {
                            tacRootAvailableEvent = document.createEvent("Event");
                            tacRootAvailableEvent.initEvent("tac.root_available", true, true)
                        }
                        if (typeof window.dispatchEvent === "function") {
                            window.dispatchEvent(tacRootAvailableEvent)
                        }
                        if (tarteaucitron.job !== undefined) {
                            tarteaucitron.job = tarteaucitron.cleanArray(tarteaucitron.job);
                            for (index = 0; index < tarteaucitron.job.length; index += 1) {
                                tarteaucitron.addService(tarteaucitron.job[index])
                            }
                        } else {
                            tarteaucitron.job = []
                        }
                        if (tarteaucitron.job.length === 0) {
                            tarteaucitron.userInterface.closeAlert()
                        }
                        tarteaucitron.isAjax = true;
                        tarteaucitron.job.push = function(id) {
                            if (typeof tarteaucitron.job.indexOf === "undefined") {
                                tarteaucitron.job.indexOf = function(obj, start) {
                                    var i, j = this.length;
                                    for (i = start || 0; i < j; i += 1) {
                                        if (this[i] === obj) {
                                            return i
                                        }
                                    }
                                    return -1
                                }
                            }
                            if (tarteaucitron.job.indexOf(id) === -1) {
                                Array.prototype.push.call(this, id)
                            }
                            tarteaucitron.launch[id] = false;
                            tarteaucitron.addService(id)
                        };
                        if (document.location.hash === tarteaucitron.hashtag && tarteaucitron.hashtag !== "") {
                            tarteaucitron.userInterface.openPanel()
                        }
                        tarteaucitron.cookie.number();
                        setInterval(tarteaucitron.cookie.number, 6e4)
                    }
                }, tarteaucitron.parameters.adblocker);
                if (tarteaucitron.parameters.adblocker === true) {
                    setTimeout(function() {
                        if (tarteaucitronNoAdBlocker === false) {
                            html = '<div id="tarteaucitronAlertBig" class="tarteaucitronAlertBig' + orientation + ' tarteaucitron-display-block" role="alert" aria-live="polite">';
                            html += '   <p id="tarteaucitronDisclaimerAlert">';
                            html += "       " + tarteaucitron.lang.adblock + "<br/>";
                            html += "       <strong>" + tarteaucitron.lang.adblock_call + "</strong>";
                            html += "   </p>";
                            html += '   <button type="button" class="tarteaucitronCTAButton" id="tarteaucitronCTAButton">';
                            html += "       " + tarteaucitron.lang.reload;
                            html += "   </button>";
                            html += "</div>";
                            html += '<div role="heading" aria-level="1" id="tac_title" class="tac_visually-hidden">' + tarteaucitron.lang.title + "</div>";
                            html += '<div id="tarteaucitronPremium"></div>';
                            div.id = "tarteaucitronRoot";
                            if (tarteaucitron.parameters.bodyPosition === "top") {
                                var bodyFirstChild = body.firstChild;
                                body.insertBefore(div, bodyFirstChild)
                            } else {
                                body.appendChild(div, body)
                            }
                            div.setAttribute("data-nosnippet", "true");
                            div.setAttribute("lang", language);
                            div.setAttribute("role", "region");
                            div.setAttribute("aria-labelledby", "tac_title");
                            div.innerHTML = html
                        }
                    }, 1500)
                }
                if (tarteaucitron.parameters.closePopup === true) {
                    setTimeout(function() {
                        var closeElement = document.getElementById("tarteaucitronAlertBig"),
                            closeSpan = document.createElement("span");
                        if (closeElement) {
                            closeSpan.textContent = "X";
                            closeSpan.setAttribute("id", "tarteaucitronCloseCross");
                            closeElement.insertBefore(closeSpan, closeElement.firstElementChild)
                        }
                    }, 100)
                }
                if (tarteaucitron.parameters.groupServices === true) {
                    var tac_group_style = document.createElement("style");
                    tac_group_style.innerHTML = ".tarteaucitronTitle{display:none}";
                    document.head.appendChild(tac_group_style);
                    var cats = document.querySelectorAll('[id^="tarteaucitronServicesTitle_"]');
                    Array.prototype.forEach.call(cats, function(item) {
                        var cat = item.getAttribute("id").replace(/^(tarteaucitronServicesTitle_)/, "");
                        if (cat !== "mandatory") {
                            var html = "";
                            html += '<li  class="tarteaucitronLine">';
                            html += '   <div class="tarteaucitronName">';
                            html += '       <span class="tarteaucitronH3" role="heading" aria-level="2">' + tarteaucitron.lang[cat].title + "</span>";
                            html += "       <span>" + tarteaucitron.lang[cat].details + "</span>";
                            html += '   <button type="button" aria-expanded="false" class="tarteaucitron-toggle-group" id="tarteaucitron-toggle-group-' + cat + '">' + tarteaucitron.lang.alertSmall + " (" + document.getElementById("tarteaucitronServices_" + cat).childElementCount + ")</button>";
                            html += "   </div>";
                            html += '   <div class="tarteaucitronAsk" id="tarteaucitron-group-' + cat + '">';
                            html += '       <button type="button" aria-label="' + tarteaucitron.lang.allow + " " + tarteaucitron.lang[cat].title + '" class="tarteaucitronAllow" id="tarteaucitron-accept-group-' + cat + '">';
                            html += '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.allow;
                            html += "       </button> ";
                            html += '       <button type="button" aria-label="' + tarteaucitron.lang.deny + " " + tarteaucitron.lang[cat].title + '" class="tarteaucitronDeny" id="tarteaucitron-reject-group-' + cat + '">';
                            html += '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' + tarteaucitron.lang.deny;
                            html += "       </button>";
                            html += "   </div>";
                            html += "</li>";
                            var ul = document.createElement("ul");
                            ul.innerHTML = html;
                            item.insertBefore(ul, item.querySelector("#tarteaucitronServices_" + cat + ""));
                            document.querySelector("#tarteaucitronServices_" + cat).style.display = "none";
                            tarteaucitron.addClickEventToId("tarteaucitron-toggle-group-" + cat, function() {
                                tarteaucitron.userInterface.toggle("tarteaucitronServices_" + cat);
                                if (document.getElementById("tarteaucitronServices_" + cat).style.display == "block") {
                                    tarteaucitron.userInterface.addClass("tarteaucitronServicesTitle_" + cat, "tarteaucitronIsExpanded");
                                    document.getElementById("tarteaucitron-toggle-group-" + cat).setAttribute("aria-expanded", "true")
                                } else {
                                    tarteaucitron.userInterface.removeClass("tarteaucitronServicesTitle_" + cat, "tarteaucitronIsExpanded");
                                    document.getElementById("tarteaucitron-toggle-group-" + cat).setAttribute("aria-expanded", "false")
                                }
                            });
                            tarteaucitron.addClickEventToId("tarteaucitron-accept-group-" + cat, function() {
                                tarteaucitron.userInterface.respondAll(true, cat)
                            });
                            tarteaucitron.addClickEventToId("tarteaucitron-reject-group-" + cat, function() {
                                tarteaucitron.userInterface.respondAll(false, cat)
                            })
                        }
                    })
                }
                if (tarteaucitron.parameters.partnersList === true && (tarteaucitron.parameters.orientation === "middle" || tarteaucitron.parameters.orientation === "popup")) {
                    setTimeout(function() {
                        var liPartners = "";
                        var tarteaucitronPartnersCat = [];
                        tarteaucitron.job.forEach(function(id) {
                            if (tarteaucitronPartnersCat[tarteaucitron.services[id].type] === undefined) {
                                tarteaucitronPartnersCat[tarteaucitron.services[id].type] = true;
                                liPartners += "<li>" + tarteaucitron.lang[tarteaucitron.services[id].type].title + "</li>"
                            }
                        });
                        var tacPartnersInfoParent = document.getElementById("tarteaucitronDisclaimerAlert");
                        if (tacPartnersInfoParent !== null) {
                            tacPartnersInfoParent.insertAdjacentHTML("beforeend", '<div class="tarteaucitronPartnersList"><b>' + tarteaucitron.lang.ourpartners + " (" + tarteaucitron.job.length + ")</b> <ul>" + liPartners + "</ul></div>")
                        }
                    }, 100)
                }
                setTimeout(function() {
                    var tacSaveButtonParent = document.getElementById("tarteaucitronServices");
                    if (tacSaveButtonParent !== null) {
                        tacSaveButtonParent.insertAdjacentHTML("beforeend", '<div id="tarteaucitronSave"><button class="tarteaucitronAllow" id="tarteaucitronSaveButton">' + tarteaucitron.lang.save + "</button></div>")
                    }
                }, 100);
                tarteaucitron.userInterface.color("", true);
                setTimeout(function() {
                    tarteaucitron.addClickEventToId("tarteaucitronCloseCross", function() {
                        tarteaucitron.userInterface.closeAlert()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronPersonalize", function() {
                        tarteaucitron.userInterface.openPanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronPersonalize2", function() {
                        tarteaucitron.userInterface.respondAll(true)
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronManager", function() {
                        tarteaucitron.userInterface.openPanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronBack", function() {
                        tarteaucitron.userInterface.closePanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronClosePanel", function() {
                        tarteaucitron.userInterface.closePanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronClosePanelCookie", function() {
                        tarteaucitron.userInterface.closePanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronPrivacyUrl", function() {
                        document.location = tarteaucitron.parameters.privacyUrl
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronPrivacyUrlDialog", function() {
                        document.location = tarteaucitron.parameters.privacyUrl
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronCookiesNumber", function() {
                        tarteaucitron.userInterface.toggleCookiesList()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronAllAllowed", function() {
                        tarteaucitron.userInterface.respondAll(true)
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronAllDenied", function() {
                        tarteaucitron.userInterface.respondAll(false)
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronAllDenied2", function() {
                        tarteaucitron.userInterface.respondAll(false, "", true);
                        if (tarteaucitron.reloadThePage === true) {
                            window.location.reload()
                        }
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronCloseAlert", function() {
                        tarteaucitron.userInterface.openPanel()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronCTAButton", function() {
                        location.reload()
                    });
                    tarteaucitron.addClickEventToId("tarteaucitronSaveButton", function() {
                        var timeoutSaveButton = 0;
                        tarteaucitron.job.forEach(function(id) {
                            if (tarteaucitron.state[id] !== true && tarteaucitron.state[id] !== false) {
                                timeoutSaveButton = 500;
                                tarteaucitron.setConsent(id, false)
                            }
                        });
                        setTimeout(tarteaucitron.userInterface.closePanel, timeoutSaveButton)
                    });
                    var toggleBtns = document.getElementsByClassName("catToggleBtn"),
                        i;
                    for (i = 0; i < toggleBtns.length; i++) {
                        toggleBtns[i].dataset.index = i;
                        tarteaucitron.addClickEventToElement(toggleBtns[i], function() {
                            if (!tarteaucitron.parameters.showDetailsOnClick) return false;
                            tarteaucitron.userInterface.toggle("tarteaucitronDetails" + cat[this.dataset.index], "tarteaucitronInfoBox");
                            if (document.getElementById("tarteaucitronDetails" + cat[this.dataset.index]).style.display === "block") {
                                this.setAttribute("aria-expanded", "true")
                            } else {
                                this.setAttribute("aria-expanded", "false")
                            }
                            return false
                        })
                    }
                    var allowBtnsInSite = document.querySelectorAll(".tac_activate .tarteaucitronAllow");
                    for (i = 0; i < allowBtnsInSite.length; i++) {
                        tarteaucitron.addClickEventToElement(allowBtnsInSite[i], function() {
                            if (this.closest(".tac_activate") !== null && this.closest(".tac_activate").parentNode !== null) {
                                this.closest(".tac_activate").parentNode.setAttribute("tabindex", "-1");
                                this.closest(".tac_activate").parentNode.focus()
                            }
                        })
                    }
                    var allowBtns = document.getElementsByClassName("tarteaucitronAllow");
                    for (i = 0; i < allowBtns.length; i++) {
                        tarteaucitron.addClickEventToElement(allowBtns[i], function() {
                            tarteaucitron.userInterface.respond(this, true)
                        })
                    }
                    var denyBtns = document.getElementsByClassName("tarteaucitronDeny");
                    for (i = 0; i < denyBtns.length; i++) {
                        tarteaucitron.addClickEventToElement(denyBtns[i], function() {
                            tarteaucitron.userInterface.respond(this, false)
                        })
                    }
                    if (tarteaucitron.events.load) {
                        tarteaucitron.events.load()
                    }
                }, 500)
            })
        })
    },
    addService: function(serviceId) {
        "use strict";
        var html = "",
            s = tarteaucitron.services,
            service = s[serviceId],
            cookie = tarteaucitron.cookie.read(),
            hostname = document.location.hostname,
            hostRef = document.referrer.split("/")[2],
            isNavigating = hostRef === hostname && window.location.href !== tarteaucitron.parameters.privacyUrl,
            isAutostart = !service.needConsent,
            isWaiting = cookie.indexOf(service.key + "=wait") >= 0,
            isDenied = cookie.indexOf(service.key + "=false") >= 0,
            isAllowed = cookie.indexOf(service.key + "=true") >= 0 || !service.needConsent && cookie.indexOf(service.key + "=false") < 0,
            isResponded = cookie.indexOf(service.key + "=false") >= 0 || cookie.indexOf(service.key + "=true") >= 0,
            isDNTRequested = navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1" || window.doNotTrack === "1",
            currentStatus = isAllowed ? tarteaucitron.lang.allowed : tarteaucitron.lang.disallowed,
            state = undefined !== service.defaultState ? service.defaultState : undefined !== tarteaucitron.parameters.serviceDefaultState ? tarteaucitron.parameters.serviceDefaultState : "wait";
        if (tarteaucitron.added[service.key] !== true) {
            tarteaucitron.added[service.key] = true;
            html += '<li id="' + service.key + 'Line" class="tarteaucitronLine">';
            html += '   <div class="tarteaucitronName">';
            html += '       <span class="tarteaucitronH3" role="heading" aria-level="3">' + service.name + "</span>";
            html += '       <div class="tarteaucitronStatusInfo">';
            html += '          <span class="tacCurrentStatus" id="tacCurrentStatus' + service.key + '">' + currentStatus + "</span>";
            html += '          <span class="tarteaucitronReadmoreSeparator"> - </span>';
            html += '          <span id="tacCL' + service.key + '" class="tarteaucitronListCookies"></span>';
            html += "       </div>";
            if (tarteaucitron.parameters.moreInfoLink == true) {
                var link = "https://tarteaucitron.io/service/" + service.key + "/";
                if (service.readmoreLink !== undefined && service.readmoreLink !== "") {
                    link = service.readmoreLink
                }
                if (tarteaucitron.parameters.readmoreLink !== undefined && tarteaucitron.parameters.readmoreLink !== "") {
                    link = tarteaucitron.parameters.readmoreLink
                }
                html += '       <a href="' + link + '" target="_blank" rel="noreferrer noopener nofollow" title="' + tarteaucitron.lang.more + " : " + tarteaucitron.lang.cookieDetail + " " + service.name + " " + tarteaucitron.lang.ourSite + " " + tarteaucitron.lang.newWindow + '" class="tarteaucitronReadmoreInfo">' + tarteaucitron.lang.more + "</a>";
                html += '       <span class="tarteaucitronReadmoreSeparator"> - </span>';
                html += '       <a href="' + service.uri + '" target="_blank" rel="noreferrer noopener" title="' + tarteaucitron.lang.source + " " + service.name + " " + tarteaucitron.lang.newWindow + '" class="tarteaucitronReadmoreOfficial">' + tarteaucitron.lang.source + "</a>"
            }
            html += "   </div>";
            html += '   <div class="tarteaucitronAsk">';
            html += '       <button type="button" aria-label="' + tarteaucitron.lang.allow + " " + service.name + '" id="' + service.key + 'Allowed" class="tarteaucitronAllow">';
            html += '           <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.allow;
            html += "       </button> ";
            html += '       <button type="button" aria-label="' + tarteaucitron.lang.deny + " " + service.name + '" id="' + service.key + 'Denied" class="tarteaucitronDeny">';
            html += '           <span class="tarteaucitronCross" aria-hidden="true"></span> ' + tarteaucitron.lang.deny;
            html += "       </button>";
            html += "   </div>";
            html += "</li>";
            tarteaucitron.userInterface.css("tarteaucitronServicesTitle_" + service.type, "display", "block");
            if (document.getElementById("tarteaucitronServices_" + service.type) !== null) {
                document.getElementById("tarteaucitronServices_" + service.type).innerHTML += html
            }
            tarteaucitron.userInterface.css("tarteaucitronNoServicesTitle", "display", "none");
            tarteaucitron.userInterface.order(service.type);
            tarteaucitron.addClickEventToId(service.key + "Allowed", function() {
                tarteaucitron.userInterface.respond(this, true)
            });
            tarteaucitron.addClickEventToId(service.key + "Denied", function() {
                tarteaucitron.userInterface.respond(this, false)
            })
        }
        tarteaucitron.pro("!" + service.key + "=" + isAllowed);
        if (isResponded === false && tarteaucitron.user.bypass === true) {
            isAllowed = true;
            tarteaucitron.cookie.create(service.key, true)
        }
        if (!isResponded && (isAutostart || isNavigating && isWaiting) && !tarteaucitron.highPrivacy || isAllowed) {
            if (!isAllowed || !service.needConsent && cookie.indexOf(service.key + "=false") < 0) {
                tarteaucitron.cookie.create(service.key, true)
            }
            if (tarteaucitron.launch[service.key] !== true) {
                tarteaucitron.launch[service.key] = true;
                if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + service.key + "_") < 0) {
                    service.js()
                }
                tarteaucitron.sendEvent(service.key + "_loaded")
            }
            tarteaucitron.state[service.key] = true;
            tarteaucitron.userInterface.color(service.key, true)
        } else if (isDenied) {
            if (typeof service.fallback === "function") {
                if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + service.key + "_") < 0) {
                    service.fallback()
                }
            }
            tarteaucitron.state[service.key] = false;
            tarteaucitron.userInterface.color(service.key, false)
        } else if (!isResponded && isDNTRequested && tarteaucitron.handleBrowserDNTRequest) {
            tarteaucitron.cookie.create(service.key, "false");
            if (typeof service.fallback === "function") {
                if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + service.key + "_") < 0) {
                    service.fallback()
                }
            }
            tarteaucitron.state[service.key] = false;
            tarteaucitron.userInterface.color(service.key, false)
        } else if (!isResponded) {
            tarteaucitron.cookie.create(service.key, state);
            if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + service.key + "_") < 0) {
                if (true === state && typeof service.js === "function") {
                    service.js();
                    tarteaucitron.sendEvent(key + "_loaded")
                } else if (typeof service.fallback === "function") {
                    service.fallback()
                }
            }
            tarteaucitron.userInterface.color(service.key, state);
            if ("wait" === state) {
                tarteaucitron.userInterface.openAlert()
            }
        }
        tarteaucitron.cookie.checkCount(service.key);
        tarteaucitron.sendEvent(service.key + "_added")
    },
    sendEvent: function(event_key) {
        if (event_key !== undefined) {
            var send_event_item;
            if (typeof Event === "function") {
                send_event_item = new Event(event_key)
            } else if (typeof document.createEvent === "function") {
                send_event_item = document.createEvent("Event");
                send_event_item.initEvent(event_key, true, true)
            }
            document.dispatchEvent(send_event_item)
        }
    },
    cleanArray: function cleanArray(arr) {
        "use strict";
        var i, len = arr.length,
            out = [],
            obj = {},
            s = tarteaucitron.services;
        for (i = 0; i < len; i += 1) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = {};
                if (tarteaucitron.services[arr[i]] !== undefined) {
                    out.push(arr[i])
                }
            }
        }
        out = out.sort(function(a, b) {
            if (s[a].type + s[a].key > s[b].type + s[b].key) {
                return 1
            }
            if (s[a].type + s[a].key < s[b].type + s[b].key) {
                return -1
            }
            return 0
        });
        return out
    },
    setConsent: function(id, status) {
        if (status === true) {
            tarteaucitron.userInterface.respond(document.getElementById(id + "Allowed"), true)
        } else if (status === false) {
            tarteaucitron.userInterface.respond(document.getElementById(id + "Denied"), false)
        }
    },
    userInterface: {
        css: function(id, property, value) {
            "use strict";
            if (document.getElementById(id) !== null) {
                if (property == "display" && value == "none" && (id == "tarteaucitron" || id == "tarteaucitronBack" || id == "tarteaucitronAlertBig")) {
                    document.getElementById(id).style["opacity"] = "0";
                    document.getElementById(id).style[property] = value
                } else {
                    document.getElementById(id).style[property] = value;
                    if (property == "display" && value == "block" && (id == "tarteaucitron" || id == "tarteaucitronAlertBig")) {
                        document.getElementById(id).style["opacity"] = "1"
                    }
                    if (property == "display" && value == "block" && id == "tarteaucitronBack") {
                        document.getElementById(id).style["opacity"] = "0.7"
                    }
                    if (property == "display" && value == "block" && id == "tarteaucitronAlertBig" && (tarteaucitron.parameters.orientation == "middle" || tarteaucitron.parameters.orientation == "popup")) {
                        tarteaucitron.userInterface.focusTrap("tarteaucitronAlertBig")
                    }
                }
            }
        },
        addClass: function(id, className) {
            "use strict";
            if (document.getElementById(id) !== null && document.getElementById(id).classList !== undefined) {
                document.getElementById(id).classList.add(className)
            }
        },
        removeClass: function(id, className) {
            "use strict";
            if (document.getElementById(id) !== null && document.getElementById(id).classList !== undefined) {
                document.getElementById(id).classList.remove(className)
            }
        },
        respondAll: function(status, type, allowSafeAnalytics) {
            "use strict";
            var s = tarteaucitron.services,
                service, key, index = 0;
            for (index = 0; index < tarteaucitron.job.length; index += 1) {
                if (typeof type !== "undefined" && type !== "" && s[tarteaucitron.job[index]].type !== type) {
                    continue
                }
                if (allowSafeAnalytics && typeof s[tarteaucitron.job[index]].safeanalytic !== "undefined" && s[tarteaucitron.job[index]].safeanalytic === true) {
                    continue
                }
                service = s[tarteaucitron.job[index]];
                key = service.key;
                if (tarteaucitron.state[key] !== status) {
                    if (status === false && tarteaucitron.launch[key] === true) {
                        tarteaucitron.reloadThePage = true;
                        if (tarteaucitron.checkIfExist("tarteaucitronClosePanel")) {
                            var ariaCloseValue = document.getElementById("tarteaucitronClosePanel").textContent.trim() + " (" + tarteaucitron.lang.reload + ")";
                            document.getElementById("tarteaucitronClosePanel").setAttribute("aria-label", ariaCloseValue);
                            document.getElementById("tarteaucitronClosePanel").setAttribute("title", ariaCloseValue)
                        }
                    }
                    if (tarteaucitron.launch[key] !== true && status === true) {
                        tarteaucitron.pro("!" + key + "=engage");
                        tarteaucitron.launch[key] = true;
                        if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + key + "_") < 0) {
                            tarteaucitron.services[key].js()
                        }
                        tarteaucitron.sendEvent(key + "_loaded")
                    }
                    var itemStatusElem = document.getElementById("tacCurrentStatus" + key);
                    tarteaucitron.state[key] = status;
                    tarteaucitron.cookie.create(key, status);
                    tarteaucitron.userInterface.color(key, status);
                    if (status == true) {
                        itemStatusElem.innerHTML = tarteaucitron.lang.allowed;
                        tarteaucitron.sendEvent(key + "_allowed")
                    } else {
                        itemStatusElem.innerHTML = tarteaucitron.lang.disallowed;
                        tarteaucitron.sendEvent(key + "_disallowed")
                    }
                }
            }
        },
        respond: function(el, status) {
            "use strict";
            if (el.id === "") {
                return
            }
            var key = el.id.replace(new RegExp("(Eng[0-9]+|Allow|Deni)ed", "g"), "");
            if (key.substring(0, 13) === "tarteaucitron" || key === "") {
                return
            }
            if (tarteaucitron.state[key] === status) {
                return
            }
            if (status === false && tarteaucitron.launch[key] === true) {
                tarteaucitron.reloadThePage = true;
                if (tarteaucitron.checkIfExist("tarteaucitronClosePanel")) {
                    var ariaCloseValue = document.getElementById("tarteaucitronClosePanel").textContent.trim() + " (" + tarteaucitron.lang.reload + ")";
                    document.getElementById("tarteaucitronClosePanel").setAttribute("aria-label", ariaCloseValue);
                    document.getElementById("tarteaucitronClosePanel").setAttribute("title", ariaCloseValue)
                }
            }
            if (status === true) {
                if (tarteaucitron.launch[key] !== true) {
                    tarteaucitron.pro("!" + key + "=engage");
                    tarteaucitron.launch[key] = true;
                    if (typeof tarteaucitronMagic === "undefined" || tarteaucitronMagic.indexOf("_" + key + "_") < 0) {
                        tarteaucitron.services[key].js()
                    }
                    tarteaucitron.sendEvent(key + "_loaded")
                }
            }
            var itemStatusElem = document.getElementById("tacCurrentStatus" + key);
            tarteaucitron.state[key] = status;
            tarteaucitron.cookie.create(key, status);
            tarteaucitron.userInterface.color(key, status);
            if (status == true) {
                itemStatusElem.innerHTML = tarteaucitron.lang.allowed;
                tarteaucitron.sendEvent(key + "_allowed")
            } else {
                itemStatusElem.innerHTML = tarteaucitron.lang.disallowed;
                tarteaucitron.sendEvent(key + "_disallowed")
            }
        },
        color: function(key, status) {
            "use strict";
            var c = "tarteaucitron",
                nbDenied = 0,
                nbPending = 0,
                nbAllowed = 0,
                sum = tarteaucitron.job.length,
                index, s = tarteaucitron.services;
            if (key !== "") {
                if (status === true) {
                    tarteaucitron.userInterface.addClass(key + "Line", "tarteaucitronIsAllowed");
                    tarteaucitron.userInterface.removeClass(key + "Line", "tarteaucitronIsDenied");
                    document.getElementById(key + "Allowed").setAttribute("aria-pressed", "true");
                    document.getElementById(key + "Denied").setAttribute("aria-pressed", "false")
                } else if (status === false) {
                    tarteaucitron.userInterface.removeClass(key + "Line", "tarteaucitronIsAllowed");
                    tarteaucitron.userInterface.addClass(key + "Line", "tarteaucitronIsDenied");
                    document.getElementById(key + "Allowed").setAttribute("aria-pressed", "false");
                    document.getElementById(key + "Denied").setAttribute("aria-pressed", "true")
                } else {
                    document.getElementById(key + "Allowed").setAttribute("aria-pressed", "false");
                    document.getElementById(key + "Denied").setAttribute("aria-pressed", "false")
                }
                var sumToRemove = 0;
                for (index = 0; index < sum; index += 1) {
                    if (typeof s[tarteaucitron.job[index]].safeanalytic !== "undefined" && s[tarteaucitron.job[index]].safeanalytic === true) {
                        sumToRemove += 1;
                        continue
                    }
                    if (tarteaucitron.state[tarteaucitron.job[index]] === false) {
                        nbDenied += 1
                    } else if (tarteaucitron.state[tarteaucitron.job[index]] === undefined) {
                        nbPending += 1
                    } else if (tarteaucitron.state[tarteaucitron.job[index]] === true) {
                        nbAllowed += 1
                    }
                }
                sum -= sumToRemove;
                tarteaucitron.userInterface.css(c + "DotGreen", "width", 100 / sum * nbAllowed + "%");
                tarteaucitron.userInterface.css(c + "DotYellow", "width", 100 / sum * nbPending + "%");
                tarteaucitron.userInterface.css(c + "DotRed", "width", 100 / sum * nbDenied + "%");
                if (nbDenied === 0 && nbPending === 0) {
                    tarteaucitron.userInterface.removeClass(c + "AllDenied", c + "IsSelected");
                    tarteaucitron.userInterface.addClass(c + "AllAllowed", c + "IsSelected");
                    tarteaucitron.userInterface.addClass(c + "MainLineOffset", c + "IsAllowed");
                    tarteaucitron.userInterface.removeClass(c + "MainLineOffset", c + "IsDenied");
                    document.getElementById(c + "AllDenied").setAttribute("aria-pressed", "false");
                    document.getElementById(c + "AllAllowed").setAttribute("aria-pressed", "true")
                } else if (nbAllowed === 0 && nbPending === 0) {
                    tarteaucitron.userInterface.removeClass(c + "AllAllowed", c + "IsSelected");
                    tarteaucitron.userInterface.addClass(c + "AllDenied", c + "IsSelected");
                    tarteaucitron.userInterface.removeClass(c + "MainLineOffset", c + "IsAllowed");
                    tarteaucitron.userInterface.addClass(c + "MainLineOffset", c + "IsDenied");
                    document.getElementById(c + "AllDenied").setAttribute("aria-pressed", "true");
                    document.getElementById(c + "AllAllowed").setAttribute("aria-pressed", "false")
                } else {
                    tarteaucitron.userInterface.removeClass(c + "AllAllowed", c + "IsSelected");
                    tarteaucitron.userInterface.removeClass(c + "AllDenied", c + "IsSelected");
                    tarteaucitron.userInterface.removeClass(c + "MainLineOffset", c + "IsAllowed");
                    tarteaucitron.userInterface.removeClass(c + "MainLineOffset", c + "IsDenied");
                    document.getElementById(c + "AllDenied").setAttribute("aria-pressed", "false");
                    document.getElementById(c + "AllAllowed").setAttribute("aria-pressed", "false")
                }
                if (nbPending === 0) {
                    tarteaucitron.userInterface.closeAlert()
                }
                if (tarteaucitron.services[key].cookies.length > 0 && status === false) {
                    tarteaucitron.cookie.purge(tarteaucitron.services[key].cookies)
                }
                if (status === true) {
                    if (document.getElementById("tacCL" + key) !== null) {
                        document.getElementById("tacCL" + key).innerHTML = "..."
                    }
                    setTimeout(function() {
                        tarteaucitron.cookie.checkCount(key)
                    }, 2500)
                } else {
                    tarteaucitron.cookie.checkCount(key)
                }
            }
            var cats = document.querySelectorAll('[id^="tarteaucitronServicesTitle_"]');
            Array.prototype.forEach.call(cats, function(item) {
                var cat = item.getAttribute("id").replace(/^(tarteaucitronServicesTitle_)/, ""),
                    total = document.getElementById("tarteaucitronServices_" + cat).childElementCount;
                var doc = document.getElementById("tarteaucitronServices_" + cat),
                    groupdenied = 0,
                    groupallowed = 0;
                for (var ii = 0; ii < doc.children.length; ii++) {
                    if (doc.children[ii].className == "tarteaucitronLine tarteaucitronIsDenied") {
                        groupdenied++
                    }
                    if (doc.children[ii].className == "tarteaucitronLine tarteaucitronIsAllowed") {
                        groupallowed++
                    }
                }
                if (total === groupallowed) {
                    tarteaucitron.userInterface.removeClass("tarteaucitron-group-" + cat, "tarteaucitronIsDenied");
                    tarteaucitron.userInterface.addClass("tarteaucitron-group-" + cat, "tarteaucitronIsAllowed");
                    if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
                        document.getElementById("tarteaucitron-reject-group-" + cat).setAttribute("aria-pressed", "false");
                        document.getElementById("tarteaucitron-accept-group-" + cat).setAttribute("aria-pressed", "true")
                    }
                }
                if (total === groupdenied) {
                    tarteaucitron.userInterface.addClass("tarteaucitron-group-" + cat, "tarteaucitronIsDenied");
                    tarteaucitron.userInterface.removeClass("tarteaucitron-group-" + cat, "tarteaucitronIsAllowed");
                    if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
                        document.getElementById("tarteaucitron-reject-group-" + cat).setAttribute("aria-pressed", "true");
                        document.getElementById("tarteaucitron-accept-group-" + cat).setAttribute("aria-pressed", "false")
                    }
                }
                if (total !== groupdenied && total !== groupallowed) {
                    tarteaucitron.userInterface.removeClass("tarteaucitron-group-" + cat, "tarteaucitronIsDenied");
                    tarteaucitron.userInterface.removeClass("tarteaucitron-group-" + cat, "tarteaucitronIsAllowed");
                    if (document.getElementById("tarteaucitron-reject-group-" + cat)) {
                        document.getElementById("tarteaucitron-reject-group-" + cat).setAttribute("aria-pressed", "false");
                        document.getElementById("tarteaucitron-accept-group-" + cat).setAttribute("aria-pressed", "false")
                    }
                }
                groupdenied = 0;
                groupallowed = 0
            })
        },
        openPanel: function() {
            "use strict";
            tarteaucitron.userInterface.css("tarteaucitron", "display", "block");
            tarteaucitron.userInterface.css("tarteaucitronBack", "display", "block");
            tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer", "display", "none");
            document.getElementById("tarteaucitronClosePanel").focus();
            if (document.getElementsByTagName("body")[0].classList !== undefined) {
                document.getElementsByTagName("body")[0].classList.add("tarteaucitron-modal-open")
            }
            tarteaucitron.userInterface.focusTrap("tarteaucitron");
            tarteaucitron.userInterface.jsSizing("main");
            var tacOpenPanelEvent;
            if (typeof Event === "function") {
                tacOpenPanelEvent = new Event("tac.open_panel")
            } else if (typeof document.createEvent === "function") {
                tacOpenPanelEvent = document.createEvent("Event");
                tacOpenPanelEvent.initEvent("tac.open_panel", true, true)
            }
            if (typeof window.dispatchEvent === "function") {
                window.dispatchEvent(tacOpenPanelEvent)
            }
        },
        closePanel: function() {
            "use strict";
            if (document.location.hash === tarteaucitron.hashtag) {
                if (window.history) {
                    window.history.replaceState("", document.title, window.location.pathname + window.location.search)
                } else {
                    document.location.hash = ""
                }
            }
            if (tarteaucitron.checkIfExist("tarteaucitron")) {
                if (tarteaucitron.checkIfExist("tarteaucitronCloseAlert")) {
                    document.getElementById("tarteaucitronCloseAlert").focus()
                } else if (tarteaucitron.checkIfExist("tarteaucitronManager")) {
                    document.getElementById("tarteaucitronManager").focus()
                } else if (tarteaucitron.customCloserId && tarteaucitron.checkIfExist(tarteaucitron.customCloserId)) {
                    document.getElementById(tarteaucitron.customCloserId).focus()
                }
                tarteaucitron.userInterface.css("tarteaucitron", "display", "none")
            }
            if (tarteaucitron.checkIfExist("tarteaucitronCookiesListContainer") && tarteaucitron.checkIfExist("tarteaucitronCookiesNumber")) {
                document.getElementById("tarteaucitronCookiesNumber").focus();
                document.getElementById("tarteaucitronCookiesNumber").setAttribute("aria-expanded", "false");
                tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer", "display", "none")
            }
            tarteaucitron.fallback(["tarteaucitronInfoBox"], function(elem) {
                elem.style.display = "none"
            }, true);
            if (tarteaucitron.reloadThePage === true) {
                window.location.reload()
            } else {
                tarteaucitron.userInterface.css("tarteaucitronBack", "display", "none")
            }
            if (document.getElementsByTagName("body")[0].classList !== undefined) {
                document.getElementsByTagName("body")[0].classList.remove("tarteaucitron-modal-open")
            }
            var tacClosePanelEvent;
            if (typeof Event === "function") {
                tacClosePanelEvent = new Event("tac.close_panel")
            } else if (typeof document.createEvent === "function") {
                tacClosePanelEvent = document.createEvent("Event");
                tacClosePanelEvent.initEvent("tac.close_panel", true, true)
            }
            if (typeof window.dispatchEvent === "function") {
                window.dispatchEvent(tacClosePanelEvent)
            }
        },
        focusTrap: function(parentElement) {
            "use strict";
            var focusableEls, firstFocusableEl, lastFocusableEl, filtered;
            focusableEls = document.getElementById(parentElement).querySelectorAll("a[href], button");
            filtered = [];
            for (var i = 0, max = focusableEls.length; i < max; i++) {
                if (focusableEls[i].offsetHeight > 0) {
                    filtered.push(focusableEls[i])
                }
            }
            firstFocusableEl = filtered[0];
            lastFocusableEl = filtered[filtered.length - 1];
            document.getElementById(parentElement).addEventListener("keydown", function(evt) {
                if (evt.key === "Tab" || evt.keyCode === 9) {
                    if (evt.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            evt.preventDefault()
                        }
                    } else {
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            evt.preventDefault()
                        }
                    }
                }
            })
        },
        openAlert: function() {
            "use strict";
            var c = "tarteaucitron";
            tarteaucitron.userInterface.css(c + "Percentage", "display", "block");
            tarteaucitron.userInterface.css(c + "AlertSmall", "display", "none");
            tarteaucitron.userInterface.css(c + "Icon", "display", "none");
            tarteaucitron.userInterface.css(c + "AlertBig", "display", "block");
            tarteaucitron.userInterface.addClass(c + "Root", "tarteaucitronBeforeVisible");
            var tacOpenAlertEvent;
            if (typeof Event === "function") {
                tacOpenAlertEvent = new Event("tac.open_alert")
            } else if (typeof document.createEvent === "function") {
                tacOpenAlertEvent = document.createEvent("Event");
                tacOpenAlertEvent.initEvent("tac.open_alert", true, true)
            }
            if (document.getElementById("tarteaucitronAlertBig") !== null && tarteaucitron.parameters.orientation === "middle") {
                document.getElementById("tarteaucitronAlertBig").focus()
            }
            if (typeof window.dispatchEvent === "function") {
                window.dispatchEvent(tacOpenAlertEvent)
            }
        },
        closeAlert: function() {
            "use strict";
            var c = "tarteaucitron";
            tarteaucitron.userInterface.css(c + "Percentage", "display", "none");
            tarteaucitron.userInterface.css(c + "AlertSmall", "display", "block");
            tarteaucitron.userInterface.css(c + "Icon", "display", "block");
            tarteaucitron.userInterface.css(c + "AlertBig", "display", "none");
            tarteaucitron.userInterface.removeClass(c + "Root", "tarteaucitronBeforeVisible");
            tarteaucitron.userInterface.jsSizing("box");
            var tacCloseAlertEvent;
            if (typeof Event === "function") {
                tacCloseAlertEvent = new Event("tac.close_alert")
            } else if (typeof document.createEvent === "function") {
                tacCloseAlertEvent = document.createEvent("Event");
                tacCloseAlertEvent.initEvent("tac.close_alert", true, true)
            }
            if (typeof window.dispatchEvent === "function") {
                window.dispatchEvent(tacCloseAlertEvent)
            }
        },
        toggleCookiesList: function() {
            "use strict";
            var div = document.getElementById("tarteaucitronCookiesListContainer"),
                togglediv = document.getElementById("tarteaucitronCookiesNumber");
            if (div === null) {
                return
            }
            if (div.style.display !== "block") {
                tarteaucitron.cookie.number();
                div.style.display = "block";
                togglediv.setAttribute("aria-expanded", "true");
                tarteaucitron.userInterface.jsSizing("cookie");
                tarteaucitron.userInterface.css("tarteaucitron", "display", "none");
                tarteaucitron.userInterface.css("tarteaucitronBack", "display", "block");
                tarteaucitron.fallback(["tarteaucitronInfoBox"], function(elem) {
                    elem.style.display = "none"
                }, true)
            } else {
                div.style.display = "none";
                togglediv.setAttribute("aria-expanded", "false");
                tarteaucitron.userInterface.css("tarteaucitron", "display", "none");
                tarteaucitron.userInterface.css("tarteaucitronBack", "display", "none")
            }
        },
        toggle: function(id, closeClass) {
            "use strict";
            var div = document.getElementById(id);
            if (div === null) {
                return
            }
            if (closeClass !== undefined) {
                tarteaucitron.fallback([closeClass], function(elem) {
                    if (elem.id !== id) {
                        elem.style.display = "none"
                    }
                }, true)
            }
            if (div.style.display !== "block") {
                div.style.display = "block"
            } else {
                div.style.display = "none"
            }
        },
        order: function(id) {
            "use strict";
            var main = document.getElementById("tarteaucitronServices_" + id),
                allDivs, store = [],
                i;
            if (main === null) {
                return
            }
            allDivs = main.childNodes;
            if (typeof Array.prototype.map === "function" && typeof Enumerable === "undefined") {
                Array.prototype.map.call(main.children, Object).sort(function(a, b) {
                    if (tarteaucitron.services[a.id.replace(/Line/g, "")].name > tarteaucitron.services[b.id.replace(/Line/g, "")].name) {
                        return 1
                    }
                    if (tarteaucitron.services[a.id.replace(/Line/g, "")].name < tarteaucitron.services[b.id.replace(/Line/g, "")].name) {
                        return -1
                    }
                    return 0
                }).forEach(function(element) {
                    main.appendChild(element)
                })
            }
        },
        jsSizing: function(type) {
            "use strict";
            var scrollbarMarginRight = 10,
                scrollbarWidthParent, scrollbarWidthChild, servicesHeight, e = window,
                a = "inner",
                windowInnerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                mainTop, mainHeight, closeButtonHeight, headerHeight, cookiesListHeight, cookiesCloseHeight, cookiesTitleHeight, paddingBox, alertSmallHeight, cookiesNumberHeight;
            if (type === "box") {
                if (document.getElementById("tarteaucitronAlertSmall") !== null && document.getElementById("tarteaucitronCookiesNumber") !== null) {
                    tarteaucitron.userInterface.css("tarteaucitronCookiesNumber", "padding", "0px 10px");
                    alertSmallHeight = document.getElementById("tarteaucitronAlertSmall").offsetHeight;
                    cookiesNumberHeight = document.getElementById("tarteaucitronCookiesNumber").offsetHeight;
                    paddingBox = (alertSmallHeight - cookiesNumberHeight) / 2;
                    tarteaucitron.userInterface.css("tarteaucitronCookiesNumber", "padding", paddingBox + "px 10px")
                }
            } else if (type === "main") {
                if (window.innerWidth === undefined) {
                    a = "client";
                    e = document.documentElement || document.body
                }
                if (document.getElementById("tarteaucitron") !== null && document.getElementById("tarteaucitronClosePanel") !== null && document.getElementById("tarteaucitronMainLineOffset") !== null) {
                    tarteaucitron.userInterface.css("tarteaucitronServices", "height", "auto");
                    mainHeight = document.getElementById("tarteaucitron").offsetHeight;
                    closeButtonHeight = document.getElementById("tarteaucitronClosePanel").offsetHeight;
                    servicesHeight = mainHeight - closeButtonHeight + 2;
                    tarteaucitron.userInterface.css("tarteaucitronServices", "height", servicesHeight + "px");
                    tarteaucitron.userInterface.css("tarteaucitronServices", "overflow-x", "auto")
                }
                if (document.getElementById("tarteaucitronServices") !== null && document.getElementById("tarteaucitronScrollbarChild") !== null) {
                    if (e[a + "Width"] <= 479) {} else if (e[a + "Width"] <= 767) {
                        scrollbarMarginRight = 12
                    }
                    scrollbarWidthParent = document.getElementById("tarteaucitronServices").offsetWidth;
                    scrollbarWidthChild = document.getElementById("tarteaucitronScrollbarChild").offsetWidth
                }
                if (document.getElementById("tarteaucitron") !== null) {
                    if (e[a + "Width"] <= 767) {
                        mainTop = 0
                    } else {
                        mainTop = (windowInnerHeight - document.getElementById("tarteaucitron").offsetHeight) / 2 - 21
                    }
                    if (document.getElementById("tarteaucitronMainLineOffset") !== null) {
                        if (document.getElementById("tarteaucitron").offsetHeight < windowInnerHeight / 2) {
                            mainTop -= document.getElementById("tarteaucitronMainLineOffset").offsetHeight
                        }
                    }
                    if (mainTop < 0) {
                        mainTop = 0
                    }
                    tarteaucitron.userInterface.css("tarteaucitron", "top", mainTop + "px")
                }
            } else if (type === "cookie") {
                if (document.getElementById("tarteaucitronAlertSmall") !== null) {
                    tarteaucitron.userInterface.css("tarteaucitronCookiesListContainer", "bottom", document.getElementById("tarteaucitronAlertSmall").offsetHeight + "px")
                }
                if (document.getElementById("tarteaucitronCookiesListContainer") !== null) {
                    tarteaucitron.userInterface.css("tarteaucitronCookiesList", "height", "auto");
                    cookiesListHeight = document.getElementById("tarteaucitronCookiesListContainer").offsetHeight;
                    cookiesCloseHeight = document.getElementById("tarteaucitronClosePanelCookie").offsetHeight;
                    cookiesTitleHeight = document.getElementById("tarteaucitronCookiesTitle").offsetHeight;
                    tarteaucitron.userInterface.css("tarteaucitronCookiesList", "height", cookiesListHeight - cookiesCloseHeight - cookiesTitleHeight - 2 + "px")
                }
            }
        }
    },
    cookie: {
        owner: {},
        create: function(key, status) {
            "use strict";
            if (tarteaucitronForceExpire !== "") {
                if (tarteaucitronExpireInDay && tarteaucitronForceExpire < 365 || !tarteaucitronExpireInDay && tarteaucitronForceExpire < 8760) {
                    if (tarteaucitronExpireInDay) {
                        timeExpire = tarteaucitronForceExpire * 864e5
                    } else {
                        timeExpire = tarteaucitronForceExpire * 36e5
                    }
                }
            }
            var d = new Date,
                time = d.getTime(),
                expireTime = time + timeExpire,
                regex = new RegExp("!" + key + "=(wait|true|false)", "g"),
                cookie = tarteaucitron.cookie.read().replace(regex, ""),
                value = tarteaucitron.parameters.cookieName + "=" + cookie + "!" + key + "=" + status,
                domain = tarteaucitron.parameters.cookieDomain !== undefined && tarteaucitron.parameters.cookieDomain !== "" ? "; domain=" + tarteaucitron.parameters.cookieDomain : "",
                secure = location.protocol === "https:" ? "; Secure" : "";
            d.setTime(expireTime);
            document.cookie = value + "; expires=" + d.toGMTString() + "; path=/" + domain + secure + "; samesite=lax";
            tarteaucitron.sendEvent("tac.consent_updated")
        },
        read: function() {
            "use strict";
            var nameEQ = tarteaucitron.parameters.cookieName + "=",
                ca = document.cookie.split(";"),
                i, c;
            for (i = 0; i < ca.length; i += 1) {
                c = ca[i];
                while (c.charAt(0) === " ") {
                    c = c.substring(1, c.length)
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length)
                }
            }
            return ""
        },
        purge: function(arr) {
            "use strict";
            var i;
            for (i = 0; i < arr.length; i += 1) {
                var rgxpCookie = new RegExp("^(.*;)?\\s*" + arr[i] + "\\s*=\\s*[^;]+(.*)?$");
                if (document.cookie.match(rgxpCookie)) {
                    document.cookie = arr[i] + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/;";
                    document.cookie = arr[i] + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=." + location.hostname + ";";
                    document.cookie = arr[i] + "=; expires=Thu, 01 Jan 2000 00:00:00 GMT; path=/; domain=." + location.hostname.split(".").slice(-2).join(".") + ";"
                }
            }
        },
        checkCount: function(key) {
            "use strict";
            var arr = tarteaucitron.services[key].cookies,
                nb = arr.length,
                nbCurrent = 0,
                html = "",
                i, status = document.cookie.indexOf(key + "=true");
            if (status >= 0 && nb === 0) {
                html += tarteaucitron.lang.useNoCookie
            } else if (status >= 0) {
                for (i = 0; i < nb; i += 1) {
                    if (document.cookie.indexOf(arr[i] + "=") !== -1) {
                        nbCurrent += 1;
                        if (tarteaucitron.cookie.owner[arr[i]] === undefined) {
                            tarteaucitron.cookie.owner[arr[i]] = []
                        }
                        if (tarteaucitron.cookie.crossIndexOf(tarteaucitron.cookie.owner[arr[i]], tarteaucitron.services[key].name) === false) {
                            tarteaucitron.cookie.owner[arr[i]].push(tarteaucitron.services[key].name)
                        }
                    }
                }
                if (nbCurrent > 0) {
                    html += tarteaucitron.lang.useCookieCurrent + " " + nbCurrent + " cookie";
                    if (nbCurrent > 1) {
                        html += "s"
                    }
                    html += "."
                } else {
                    html += tarteaucitron.lang.useNoCookie
                }
            } else if (nb === 0) {
                html = tarteaucitron.lang.noCookie
            } else {
                html += tarteaucitron.lang.useCookie + " " + nb + " cookie";
                if (nb > 1) {
                    html += "s"
                }
                html += "."
            }
            if (document.getElementById("tacCL" + key) !== null) {
                document.getElementById("tacCL" + key).innerHTML = html
            }
        },
        crossIndexOf: function(arr, match) {
            "use strict";
            var i;
            for (i = 0; i < arr.length; i += 1) {
                if (arr[i] === match) {
                    return true
                }
            }
            return false
        },
        number: function() {
            "use strict";
            var cookies = document.cookie.split(";"),
                nb = document.cookie !== "" ? cookies.length : 0,
                html = "",
                i, name, namea, nameb, c, d, s = nb > 1 ? "s" : "",
                savedname, regex = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i,
                regexedDomain = tarteaucitron.cdn.match(regex) !== null ? tarteaucitron.cdn.match(regex)[1] : tarteaucitron.cdn,
                host = tarteaucitron.domain !== undefined ? tarteaucitron.domain : regexedDomain;
            cookies = cookies.sort(function(a, b) {
                namea = a.split("=", 1).toString().replace(/ /g, "");
                nameb = b.split("=", 1).toString().replace(/ /g, "");
                c = tarteaucitron.cookie.owner[namea] !== undefined ? tarteaucitron.cookie.owner[namea] : "0";
                d = tarteaucitron.cookie.owner[nameb] !== undefined ? tarteaucitron.cookie.owner[nameb] : "0";
                if (c + a > d + b) {
                    return 1
                }
                if (c + a < d + b) {
                    return -1
                }
                return 0
            });
            if (document.cookie !== "") {
                for (i = 0; i < nb; i += 1) {
                    name = cookies[i].split("=", 1).toString().replace(/ /g, "");
                    if (tarteaucitron.cookie.owner[name] !== undefined && tarteaucitron.cookie.owner[name].join(" // ") !== savedname) {
                        savedname = tarteaucitron.cookie.owner[name].join(" // ");
                        html += '<div class="tarteaucitronHidden">';
                        html += '     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">';
                        html += "        " + tarteaucitron.cookie.owner[name].join(" // ");
                        html += "    </span>";
                        html += '</div><ul class="cookie-list">'
                    } else if (tarteaucitron.cookie.owner[name] === undefined && host !== savedname) {
                        savedname = host;
                        html += '<div class="tarteaucitronHidden">';
                        html += '     <span class="tarteaucitronTitle tarteaucitronH3" role="heading" aria-level="3">';
                        html += "        " + host;
                        html += "    </span>";
                        html += '</div><ul class="cookie-list">'
                    }
                    html += '<li class="tarteaucitronCookiesListMain">';
                    html += '    <div class="tarteaucitronCookiesListLeft"><button type="button" class="purgeBtn" data-cookie="' + tarteaucitron.fixSelfXSS(cookies[i].split("=", 1)) + '"><strong>&times;</strong></button> <strong>' + tarteaucitron.fixSelfXSS(name) + "</strong>";
                    html += "    </div>";
                    html += '    <div class="tarteaucitronCookiesListRight">' + tarteaucitron.fixSelfXSS(cookies[i].split("=").slice(1).join("=")) + "</div>";
                    html += "</li>"
                }
                html += "</ul>"
            } else {
                html += '<div class="tarteaucitronCookiesListMain">';
                html += '    <div class="tarteaucitronCookiesListLeft"><strong>-</strong></div>';
                html += '    <div class="tarteaucitronCookiesListRight"></div>';
                html += "</div>"
            }
            html += '<div class="tarteaucitronHidden tarteaucitron-spacer-20"></div>';
            if (document.getElementById("tarteaucitronCookiesList") !== null) {
                document.getElementById("tarteaucitronCookiesList").innerHTML = html
            }
            if (document.getElementById("tarteaucitronCookiesNumber") !== null) {
                document.getElementById("tarteaucitronCookiesNumber").innerHTML = nb;
                document.getElementById("tarteaucitronCookiesNumber").setAttribute("aria-label", nb + " cookie" + s + " - " + tarteaucitron.lang.toggleInfoBox);
                document.getElementById("tarteaucitronCookiesNumber").setAttribute("title", nb + " cookie" + s + " - " + tarteaucitron.lang.toggleInfoBox)
            }
            if (document.getElementById("tarteaucitronCookiesNumberBis") !== null) {
                document.getElementById("tarteaucitronCookiesNumberBis").innerHTML = nb + " cookie" + s
            }
            var purgeBtns = document.getElementsByClassName("purgeBtn");
            for (i = 0; i < purgeBtns.length; i++) {
                tarteaucitron.addClickEventToElement(purgeBtns[i], function() {
                    tarteaucitron.cookie.purge([this.dataset.cookie]);
                    tarteaucitron.cookie.number();
                    tarteaucitron.userInterface.jsSizing("cookie");
                    return false
                })
            }
            for (i = 0; i < tarteaucitron.job.length; i += 1) {
                tarteaucitron.cookie.checkCount(tarteaucitron.job[i])
            }
        }
    },
    fixSelfXSS: function(html) {
        return html.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    },
    getLanguage: function() {
        "use strict";
        var availableLanguages = "ar,bg,ca,cn,cs,da,de,et,el,en,es,fi,fr,hu,it,ja,lb,lt,lv,nl,no,oc,pl,pt,ro,ru,se,sk,sv,tr,uk,vi,zh",
            defaultLanguage = "en";
        if (tarteaucitronForceLanguage !== "") {
            if (availableLanguages.indexOf(tarteaucitronForceLanguage) !== -1) {
                return tarteaucitronForceLanguage
            }
        }
        if (availableLanguages.indexOf(document.documentElement.getAttribute("lang").substr(0, 2)) !== -1) {
            return document.documentElement.getAttribute("lang").substr(0, 2)
        }
        if (!navigator) {
            return defaultLanguage
        }
        var lang = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLang || null,
            userLanguage = lang ? lang.substr(0, 2) : null;
        if (availableLanguages.indexOf(userLanguage) !== -1) {
            return userLanguage
        }
        return defaultLanguage
    },
    getLocale: function() {
        "use strict";
        if (!navigator) {
            return "en_US"
        }
        var lang = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLang || null,
            userLanguage = lang ? lang.substr(0, 2) : null;
        if (userLanguage === "fr") {
            return "fr_FR"
        } else if (userLanguage === "en") {
            return "en_US"
        } else if (userLanguage === "de") {
            return "de_DE"
        } else if (userLanguage === "es") {
            return "es_ES"
        } else if (userLanguage === "it") {
            return "it_IT"
        } else if (userLanguage === "pt") {
            return "pt_PT"
        } else if (userLanguage === "nl") {
            return "nl_NL"
        } else if (userLanguage === "el") {
            return "el_EL"
        } else {
            return "en_US"
        }
    },
    addScript: function(url, id, callback, execute, attrName, attrVal, internal) {
        "use strict";
        var script, done = false;
        if (execute === false) {
            if (typeof callback === "function") {
                callback()
            }
        } else {
            script = document.createElement("script");
            if (id !== undefined) {
                script.id = id
            }
            script.async = true;
            script.src = url;
            if (attrName !== undefined && attrVal !== undefined) {
                script.setAttribute(attrName, attrVal)
            }
            if (typeof callback === "function") {
                if (!tarteaucitron.parameters.useExternalJs || !internal) {
                    script.onreadystatechange = script.onload = function() {
                        var state = script.readyState;
                        if (!done && (!state || /loaded|complete/.test(state))) {
                            done = true;
                            callback()
                        }
                    }
                } else {
                    callback()
                }
            }
            if (!tarteaucitron.parameters.useExternalJs || !internal) {
                document.getElementsByTagName("head")[0].appendChild(script)
            }
        }
    },
    addInternalScript: function(url, id, callback, execute, attrName, attrVal) {
        tarteaucitron.addScript(url, id, callback, execute, attrName, attrVal, true)
    },
    checkIfExist: function(elemId) {
        "use strict";
        return document.getElementById(elemId) !== null && document.getElementById(elemId).offsetWidth !== 0 && document.getElementById(elemId).offsetHeight !== 0
    },
    makeAsync: {
        antiGhost: 0,
        buffer: "",
        init: function(url, id) {
            "use strict";
            var savedWrite = document.write,
                savedWriteln = document.writeln;
            document.write = function(content) {
                tarteaucitron.makeAsync.buffer += content
            };
            document.writeln = function(content) {
                tarteaucitron.makeAsync.buffer += content.concat("\n")
            };
            setTimeout(function() {
                document.write = savedWrite;
                document.writeln = savedWriteln
            }, 2e4);
            tarteaucitron.makeAsync.getAndParse(url, id)
        },
        getAndParse: function(url, id) {
            "use strict";
            if (tarteaucitron.makeAsync.antiGhost > 9) {
                tarteaucitron.makeAsync.antiGhost = 0;
                return
            }
            tarteaucitron.makeAsync.antiGhost += 1;
            tarteaucitron.addInternalScript(url, "", function() {
                if (document.getElementById(id) !== null) {
                    document.getElementById(id).innerHTML += "<span class='tarteaucitron-display-none'>&nbsp;</span>" + tarteaucitron.makeAsync.buffer;
                    tarteaucitron.makeAsync.buffer = "";
                    tarteaucitron.makeAsync.execJS(id)
                }
            })
        },
        execJS: function(id) {
            var i, scripts, childId, type;
            if (document.getElementById(id) === null) {
                return
            }
            scripts = document.getElementById(id).getElementsByTagName("script");
            for (i = 0; i < scripts.length; i += 1) {
                type = scripts[i].getAttribute("type") !== null ? scripts[i].getAttribute("type") : "";
                if (type === "") {
                    type = scripts[i].getAttribute("language") !== null ? scripts[i].getAttribute("language") : ""
                }
                if (scripts[i].getAttribute("src") !== null && scripts[i].getAttribute("src") !== "") {
                    childId = id + Math.floor(Math.random() * 99999999999);
                    document.getElementById(id).innerHTML += '<div id="' + childId + '"></div>';
                    tarteaucitron.makeAsync.getAndParse(scripts[i].getAttribute("src"), childId)
                } else if (type.indexOf("javascript") !== -1 || type === "") {
                    eval(scripts[i].innerHTML)
                }
            }
        }
    },
    fallback: function(matchClass, content, noInner) {
        "use strict";
        var elems = document.getElementsByTagName("*"),
            i, index = 0;
        for (i in elems) {
            if (elems[i] !== undefined) {
                for (index = 0; index < matchClass.length; index += 1) {
                    if ((" " + elems[i].className + " ").indexOf(" " + matchClass[index] + " ") > -1) {
                        if (typeof content === "function") {
                            if (noInner === true) {
                                content(elems[i])
                            } else {
                                elems[i].innerHTML = content(elems[i])
                            }
                        } else {
                            elems[i].innerHTML = content
                        }
                    }
                }
            }
        }
    },
    engage: function(id) {
        "use strict";
        var html = "",
            r = Math.floor(Math.random() * 1e5),
            engage = tarteaucitron.services[id].name + " " + tarteaucitron.lang.fallback;
        if (tarteaucitron.lang["engage-" + id] !== undefined) {
            engage = tarteaucitron.lang["engage-" + id]
        }
        html += '<div class="tac_activate tac_activate_' + id + '">';
        html += '   <div class="tac_float">';
        html += "      " + engage;
        html += '      <button type="button" class="tarteaucitronAllow" id="Eng' + r + "ed" + id + '">';
        html += '          <span class="tarteaucitronCheck" aria-hidden="true"></span> ' + tarteaucitron.lang.allow;
        html += "       </button>";
        html += "   </div>";
        html += "</div>";
        return html
    },
    extend: function(a, b) {
        "use strict";
        var prop;
        for (prop in b) {
            if (b.hasOwnProperty(prop)) {
                a[prop] = b[prop]
            }
        }
    },
    proTemp: "",
    proTimer: function() {
        "use strict";
        setTimeout(tarteaucitron.proPing, Math.floor(Math.random() * (1200 - 500 + 1)) + 500)
    },
    pro: function(list) {
        "use strict";
        tarteaucitron.proTemp += list;
        clearTimeout(tarteaucitron.proTimer);
        tarteaucitron.proTimer = setTimeout(tarteaucitron.proPing, Math.floor(Math.random() * (1200 - 500 + 1)) + 500)
    },
    proPing: function() {
        "use strict";
        if (tarteaucitron.uuid !== "" && tarteaucitron.uuid !== undefined && tarteaucitron.proTemp !== "" && tarteaucitronStatsEnabled) {
            var div = document.getElementById("tarteaucitronPremium"),
                timestamp = (new Date).getTime(),
                url = "https://tarteaucitron.io/log/?";
            if (div === null) {
                return
            }
            url += "account=" + tarteaucitron.uuid + "&";
            url += "domain=" + tarteaucitron.domain + "&";
            url += "status=" + encodeURIComponent(tarteaucitron.proTemp) + "&";
            url += "_time=" + timestamp;
            div.innerHTML = '<img src="' + url + '" class="tarteaucitron-display-none" alt="" />';
            tarteaucitron.proTemp = ""
        }
        tarteaucitron.cookie.number()
    },
    AddOrUpdate: function(source, custom) {
        for (var key in custom) {
            if (custom[key] instanceof Object) {
                source[key] = tarteaucitron.AddOrUpdate(source[key], custom[key])
            } else {
                source[key] = custom[key]
            }
        }
        return source
    },
    getElemWidth: function(elem) {
        return tarteaucitron.getElemAttr(elem, "width") || elem.clientWidth
    },
    getElemHeight: function(elem) {
        return tarteaucitron.getElemAttr(elem, "height") || elem.clientHeight
    },
    getElemAttr: function(elem, attr) {
        var attribute = elem.getAttribute("data-" + attr) || elem.getAttribute(attr);
        if (typeof attribute === "string") {
            return tarteaucitron.fixSelfXSS(attribute)
        }
        return ""
    },
    addClickEventToId: function(elemId, func) {
        tarteaucitron.addClickEventToElement(document.getElementById(elemId), func)
    },
    addClickEventToElement: function(e, func) {
        if (e) {
            if (e.addEventListener) {
                e.addEventListener("click", func)
            } else {
                e.attachEvent("onclick", func)
            }
        }
    },
    triggerJobsAfterAjaxCall: function() {
        tarteaucitron.job.forEach(function(e) {
            tarteaucitron.job.push(e)
        });
        var i;
        var allowBtns = document.getElementsByClassName("tarteaucitronAllow");
        for (i = 0; i < allowBtns.length; i++) {
            tarteaucitron.addClickEventToElement(allowBtns[i], function() {
                tarteaucitron.userInterface.respond(this, true)
            })
        }
        var denyBtns = document.getElementsByClassName("tarteaucitronDeny");
        for (i = 0; i < denyBtns.length; i++) {
            tarteaucitron.addClickEventToElement(denyBtns[i], function() {
                tarteaucitron.userInterface.respond(this, false)
            })
        }
    }
};
if (tarteaucitronForceLanguage == '') {
    var tarteaucitronForceLanguage = 'en';
}
var tarteaucitronCustomText = {
    "privacyUrl": "Cookie Policy"
};
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).tarteaucitron_block = {})
}(this, function(t) {
    "use strict";

    function l(e, t) { /*if (!tarteaucitronIsMagicPossible) {return;}*/
        return e && (!t || t !== u) && (!a.blacklist || a.blacklist.some(function(t) {
            if (t.test(e) && tarteaucitronIsMagicPossible) {
                tarteaucitronMagic += "_" + tarteaucitron_services[t.toString().replace(/\\/g, '')] + "_";
                (tarteaucitron.job = tarteaucitron.job || []).push(tarteaucitron_services[t.toString().replace(/\\/g, '')]);
            }
            return t.test(e)
        })) && (!a.whitelist || a.whitelist.every(function(t) {
            return !t.test(e)
        }))
    }

    function s(t) {
        var e = t.getAttribute("src");
        return a.blacklist && a.blacklist.every(function(t) {
            return !t.test(e)
        }) || a.whitelist && a.whitelist.some(function(t) {
            return t.test(e)
        })
    }
    var u = "javascript/blocked",
        a = {
            blacklist: window.tarteaucitron_blacklist,
            whitelist: window.tarteaucitron_whitelist
        },
        f = {
            blacklisted: []
        },
        p = window.tarteaucitron_iframe,
        d = {
            blacklisted: []
        },
        y = new MutationObserver(function(t) {
            for (var e = 0; e < t.length; e++)
                for (var c = t[e].addedNodes, r = function(t) {
                        var r = c[t];
                        if (1 === r.nodeType && "SCRIPT" === r.tagName) {
                            var e = r.src,
                                n = r.type;
                            if (l(e, n)) {
                                if (typeof e !== "undefined" && !document.getElementById(e.replace(/\W/g, ''))) {
                                    r.insertAdjacentHTML('beforeBegin', '<span id="' + e.replace(/\W/g, '') + '"></span>');
                                    var timerms = 1200;
                                    if (tarteaucitron.services['klaviyo'] !== undefined) {
                                        timerms = 0;
                                    }
                                    var tac_interval_javascript = setInterval(function() {
                                        if (typeof tarteaucitron.services['klaviyo'] == 'undefined') return;
                                        clearInterval(tac_interval_javascript);
                                        window.tarteaucitron_blacklist.some(function(regex) {
                                            var idservice = tarteaucitron_services[regex.toString().replaceAll('\\', '')];
                                            if (regex.test(e) && tarteaucitron.state[idservice] !== true && typeof tarteaucitron.services[idservice] !== "undefined" && typeof tarteaucitron.services[idservice].fallback === "function" && tarteaucitron.services[idservice].type !== "analytic") {
                                                var idengage = "Eng" + Math.floor(Math.random() * 100000) + "ed" + idservice;
                                                document.getElementById(e.replace(/\W/g, '')).insertAdjacentHTML('beforeBegin', '<span id="' + idengage + '_container" class="tarteaucitron-magic-block tarteaucitron-magic-block-' + idservice + '"><b>' + tarteaucitron.services[idservice].name + ' ' + tarteaucitron.lang.fallback + '</b><br/>' + tarteaucitron.lang[tarteaucitron.services[idservice].type].details + '<br/>' + tarteaucitron.lang.disclaimer + '<br/><button id="' + idengage + '" class="tarteaucitronAllow">' + tarteaucitron.lang.allow + ' ' + tarteaucitron.services[idservice].name + '</button></span>');
                                                setTimeout(function() {
                                                    tarteaucitronMagic += "_" + idservice + "_";
                                                    (tarteaucitron.job = tarteaucitron.job || []).push(idservice);
                                                }, 10);
                                                tarteaucitron.addClickEventToId(idengage + '', function() {
                                                    tarteaucitron.userInterface.respond(document.getElementById(idengage), true);
                                                    document.getElementById(idengage + '_container').style.display = 'none';
                                                });
                                                document.addEventListener(idservice + "_loaded", function() {
                                                    document.getElementById(idengage + '_container').style.display = 'none';
                                                });
                                            }
                                        });
                                    }, 100);
                                }
                                f.blacklisted.push([r, r.type]), r.type = u;
                                r.addEventListener("beforescriptexecute", function t(e) {
                                    r.getAttribute("type") === u && e.preventDefault(), r.removeEventListener("beforescriptexecute", t)
                                }), r.parentElement && r.parentElement.removeChild(r)
                            }
                        }
                        if (1 === r.nodeType && "IFRAME" === r.tagName && !1 !== p) {
                            var i = r.src;
                            if (l(i)) {
                                var o = "tarteaucitron_iframe_id_".concat(Math.floor(1e3 * Math.random()) + 1);
                                d.blacklisted.push([o, r]);
                                var a = document.createElement("span");
                                if (typeof i !== "undefined" && !document.getElementById(i.replace(/\W/g, ''))) {
                                    r.insertAdjacentHTML('beforeBegin', '<span id="' + i.replace(/\W/g, '') + '"></span>');
                                    var timerms = 1200;
                                    if (tarteaucitron.services['klaviyo'] !== undefined) {
                                        timerms = 0;
                                    }
                                    var tac_interval_iframe = setInterval(function() {
                                        if (typeof tarteaucitron.services['klaviyo'] == 'undefined') return;
                                        clearInterval(tac_interval_iframe);
                                        window.tarteaucitron_blacklist.some(function(regex) {
                                            var idservice = tarteaucitron_services[regex.toString().replaceAll('\\', '')];
                                            if (regex.test(i) && tarteaucitron.state[idservice] !== true && typeof tarteaucitron.services[idservice] !== "undefined" && typeof tarteaucitron.services[idservice].fallback === "function" && tarteaucitron.services[idservice].type !== "analytic") {
                                                var idengage = "Eng" + Math.floor(Math.random() * 100000) + "ed" + idservice;
                                                document.getElementById(i.replace(/\W/g, '')).insertAdjacentHTML('beforeBegin', '<span id="' + idengage + '_container" class="tarteaucitron-magic-block tarteaucitron-magic-block-' + idservice + '"><b>' + tarteaucitron.services[idservice].name + ' ' + tarteaucitron.lang.fallback + '</b><br/>' + tarteaucitron.lang[tarteaucitron.services[idservice].type].details + '<br/>' + tarteaucitron.lang.disclaimer + '<br/><button id="' + idengage + '" class="tarteaucitronAllow">' + tarteaucitron.lang.allow + ' ' + tarteaucitron.services[idservice].name + '</button></span>');
                                                setTimeout(function() {
                                                    tarteaucitronMagic += "_" + idservice + "_";
                                                    (tarteaucitron.job = tarteaucitron.job || []).push(idservice);
                                                }, 10);
                                                tarteaucitron.addClickEventToId(idengage + '', function() {
                                                    tarteaucitron.userInterface.respond(document.getElementById(idengage), true);
                                                    document.getElementById(idengage + '_container').style.display = 'none';
                                                });
                                                document.addEventListener(idservice + "_loaded", function() {
                                                    document.getElementById(idengage + '_container').style.display = 'none';
                                                });
                                            }
                                        });
                                    }, 100);
                                }
                                a.setAttribute("data-tarteaucitron-id", o), r.parentElement.insertBefore(a, r), r.parentElement && r.parentElement.removeChild(r)
                            }
                        }
                    }, n = 0; n < c.length; n++) r(n)
        });
    y.observe(document.documentElement, {
        childList: !0,
        subtree: !0
    });
    var i = document.createElement,
        o = {
            src: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src"),
            type: Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "type")
        };

    function m(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    n || null == c.return || c.return()
                } finally {
                    if (i) throw o
                }
            }
            return r
        }(t, e) || r(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(t) {
        return function(t) {
            if (Array.isArray(t)) return n(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || r(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(t, e) {
        if (t) {
            if ("string" == typeof t) return n(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
        }
    }

    function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    document.createElement = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        if ("script" !== e[0].toLowerCase()) return i.bind(document).apply(void 0, e);
        var n = i.bind(document).apply(void 0, e);
        try {
            Object.defineProperties(n, {
                src: {
                    get: function() {
                        return o.src.get.call(this)
                    },
                    set: function(t) {
                        l(t, n.type) && o.type.set.call(this, u), o.src.set.call(this, t)
                    }
                },
                type: {
                    set: function(t) {
                        var e = l(n.src, n.type) ? u : t;
                        o.type.set.call(this, e)
                    }
                }
            }), n.setAttribute = function(t, e) {
                "type" === t || "src" === t ? n[t] = e : HTMLScriptElement.prototype.setAttribute.call(n, t, e)
            }
        } catch (t) {}
        return n
    };
    var h = new RegExp("[|\\{}()[\\]^$+*?.]", "g");
    t.unblock = function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++) r[e] = arguments[e];
        r.length < 1 ? (a.blacklist = [], a.whitelist = []) : (a.blacklist && (a.blacklist = a.blacklist.filter(function(e) {
            return r.every(function(t) {
                return "string" == typeof t ? !e.test(t) : t instanceof RegExp ? e.toString() !== t.toString() : void 0
            })
        })), a.whitelist && (a.whitelist = [].concat(b(a.whitelist), b(r.map(function(e) {
            if ("string" == typeof e) {
                var r = ".*" + e.replace(h, "\\$&") + ".*";
                if (a.whitelist.every(function(t) {
                        return t.toString() !== r.toString()
                    })) return new RegExp(r)
            } else if (e instanceof RegExp && a.whitelist.every(function(t) {
                    return t.toString() !== e.toString()
                })) return e;
            return null
        }).filter(Boolean)))));
        for (var n = document.querySelectorAll('script[type="'.concat(u, '"]')), i = 0; i < n.length; i++) {
            var o = n[i];
            s(o) && (f.blacklisted.push([o, "application/javascript"]), o.parentElement.removeChild(o))
        }
        var c = 0;
        b(f.blacklisted).forEach(function(t, e) {
            var r = m(t, 2),
                n = r[0],
                i = r[1];
            if (s(n)) {
                var o = document.createElement("script");
                for (var a in o.setAttribute("src", n.src), o.setAttribute("type", i || "application/javascript"), n) a.startsWith("on") && (o[a] = n[a]);
                document.head.appendChild(o), f.blacklisted.splice(e - c, 1), c++
            }
        });
        var l = 0;
        b(d.blacklisted).forEach(function(t, e) {
            var r = m(t, 2),
                n = r[0],
                i = b(r[1].attributes),
                o = document.querySelector("span[data-tarteaucitron-id=".concat(n, "]")),
                a = document.createElement("iframe");
            i.forEach(function(t) {
                t.name.startsWith("data-") || t.name.startsWith("allow") ? a.setAttribute(t.name, t.value) : t.name.startsWith("class") ? t.value.split(" ").forEach(function(t) {
                    a.classList.add(t)
                }) : t.name.startsWith("allow") || (a[t.name] = t.value)
            }), o.parentElement.insertBefore(a, o), o.parentElement.removeChild(o), d.blacklisted.splice(e - l, 1), l++
        }), a.blacklist && a.blacklist.length < 1 && y.disconnect()
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
if (document.readyState !== 'loading') {
    var customTheme = document.createElement('style'),
        cssRule = 'span.tarteaucitron-magic-block {background: #414141;display: inline-block;padding: 25px;color: #ffffff;text-align: center;max-width: 400px;font-size: 14px;}span.tarteaucitron-magic-block b {font-size: 17px;}span.tarteaucitron-magic-block button {margin-top: 15px;}div#tarteaucitronAlertBig {box-sizing: border-box!important;}#tarteaucitron #tarteaucitronServices .tarteaucitronMainLine .tarteaucitronName a, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle a {color: #ffffff !important}#tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain:hover, #tarteaucitron #tarteaucitronServices .tarteaucitronLine:hover, html body #tarteaucitronRoot #tarteaucitron .tarteaucitronHidden:hover ul li {background: rgba(65, 65, 65, 0.2) !important;}#tarteaucitron #tarteaucitronServices .tarteaucitronHidden, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronHidden {background: rgba(65, 65, 65, 0.07) !important}#tarteaucitron .tarteaucitronBorder, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronHidden, #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine {border-color:#414141 !important}#tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain, #tarteaucitron #tarteaucitronServices .tarteaucitronLine, .tarteaucitron-toggle-group {background: rgba(65, 65, 65, 0.1) !important} #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine .tarteaucitronName b, #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert b, #tarteaucitronAlertSmall #tarteaucitronCookiesNumber, #tarteaucitronAlertSmall #tarteaucitronManager, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle b, #tarteaucitron #tarteaucitronInfo a, html body #tarteaucitronRoot div#tarteaucitronInfo, #tarteaucitron .tarteaucitronH1, #tarteaucitron .tarteaucitronName tarteaucitronH2,#tarteaucitronAlertBig #tarteaucitronDisclaimerAlert strong, #tarteaucitron .tarteaucitronTitle button {color:#ffffff !important} #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine, #tarteaucitronAlertBig, #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert, #tarteaucitronAlertSmall, .tac_activate, .tac_activate .tac_float, .tac_activate .tac_float b, #tarteaucitron #tarteaucitronClosePanel, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronClosePanelCookie, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle:hover, #tarteaucitron #tarteaucitronInfo, #tarteaucitron #tarteaucitronServices .tarteaucitronDetails, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronTitle, #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine:hover, div#tarteaucitronServices, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle button {background: #414141 !important;color:#ffffff !important}#tarteaucitronAlertBig #tarteaucitronCloseAlert {color: #414141 !important;background:#ffffff !important}html body #tarteaucitronRoot #tarteaucitronAlertBig, html body #tarteaucitronRoot span#tarteaucitronDisclaimerAlert{background-color:#414141!important}html body #tarteaucitronRoot #tarteaucitronAlertBig span{color:#fff!important}html body #tarteaucitronRoot div#tarteaucitronAlertBig:before, html body #tarteaucitronRoot #tarteaucitronAlertBig span ul li, html body #tarteaucitronRoot #tarteaucitronAlertBig span b{color:#fff!important}html body #tarteaucitronRoot button.tarteaucitronAllow{background-color:#0071ce!important}html body .tac_activate .tac_float .tarteaucitronAllow {background-color:#0071ce!important}head .tarteaucitron-magic-block button {display: none;}.tarteaucitron-magic-block button {border-radius: 4px;background-color:#0071ce!important;cursor: pointer;display: inline-block;padding: 6px 10px;text-align: center;text-decoration: none;width: auto;border: 0;cursor:pointer;}html body #tarteaucitronRoot button.tarteaucitronAllow{color:#fff!important}html body .tac_activate .tac_float .tarteaucitronAllow, html body #tarteaucitronRoot .tarteaucitronCheck:before{color:#fff!important}.tarteaucitron-magic-block button {color:#fff!important}html body #tarteaucitronRoot button.tarteaucitronDeny{background-color:#ff3700!important}html body #tarteaucitronRoot button.tarteaucitronDeny{color:#fff!important}html body #tarteaucitronRoot .tarteaucitronCross:before{color:#fff!important}html body #tarteaucitronRoot #tarteaucitronCloseAlert{background-color:#f5f5f5!important}html body #tarteaucitronRoot #tarteaucitronCloseAlert{color:#414141!important}html body #tarteaucitronRoot #tarteaucitronPrivacyUrl{background-color:#414141!important}html body #tarteaucitronRoot #tarteaucitronPrivacyUrl{color:#ffffff!important}html body #tarteaucitronRoot li.tarteaucitronLine.tarteaucitronIsAllowed{border-color:#0071ce!important}html body #tarteaucitronRoot li.tarteaucitronLine.tarteaucitronIsDenied{border-color:#ff3700!important}html body #tarteaucitronRoot #tarteaucitronDotGreen{background-color:#0071ce!important}html body #tarteaucitronRoot #tarteaucitronDotRed{background-color:#ff3700!important}';
    customTheme.type = 'text/css';
    if (customTheme.styleSheet) {
        customTheme.styleSheet.cssText = cssRule;
    } else {
        customTheme.appendChild(document.createTextNode(cssRule));
    }
    document.getElementsByTagName('head')[0].appendChild(customTheme);
    tarteaucitron.job = tarteaucitron.job || [];
    tarteaucitron.uuid = 'ce1bd3fe35a9371b0a4c8267afb8e0bb3e2c878b';

    function tarteaucitronProLoadServices() {}
    tarteaucitron.domain = 'construction-osterreich.arcelormittal.com';
    tarteaucitronProLoadServices();
    tarteaucitron.init({
        "showDetailsOnClick": true,
        "groupServices": true,
        "mandatory": true,
        "AcceptAllCta": true,
        "DenyAllCta": true,
        "cookieslist": false,
        "adblocker": false,
        "european": true,
        "hashtag": "#tarteaucitron",
        "highPrivacy": true,
        "orientation": "bottom",
        "removeCredit": true,
        "showAlertSmall": false,
        "privacyUrl": "https:\/\/construction-osterreich.arcelormittal.com\/en\/cookie-policy",
        "cookieName": "tarteaucitron",
        "closePopup": false,
        "enablemagic": true,
        "expireindays": 365,
        "handleBrowserDNTRequest": false,
        "moreInfoLink": true,
        "readmoreLink": "https:\/\/construction-osterreich.arcelormittal.com\/en\/cookie-policy",
        "iconSrc": "",
        "showIcon": true,
        "iconPosition": "BottomRight",
        "bodyPosition": "bottom",
        "serviceDefaultState": "wait"
    });
    setTimeout(function() {
        tarteaucitronIsMagicPossible = false;
    }, 101);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        var customTheme = document.createElement('style'),
            cssRule = 'span.tarteaucitron-magic-block {background: #414141;display: inline-block;padding: 25px;color: #ffffff;text-align: center;max-width: 400px;font-size: 14px;}span.tarteaucitron-magic-block b {font-size: 17px;}span.tarteaucitron-magic-block button {margin-top: 15px;}div#tarteaucitronAlertBig {box-sizing: border-box!important;}#tarteaucitron #tarteaucitronServices .tarteaucitronMainLine .tarteaucitronName a, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle a {color: #ffffff !important}#tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain:hover, #tarteaucitron #tarteaucitronServices .tarteaucitronLine:hover, html body #tarteaucitronRoot #tarteaucitron .tarteaucitronHidden:hover ul li {background: rgba(65, 65, 65, 0.2) !important;}#tarteaucitron #tarteaucitronServices .tarteaucitronHidden, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronHidden {background: rgba(65, 65, 65, 0.07) !important}#tarteaucitron .tarteaucitronBorder, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronHidden, #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine {border-color:#414141 !important}#tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronCookiesListMain, #tarteaucitron #tarteaucitronServices .tarteaucitronLine, .tarteaucitron-toggle-group {background: rgba(65, 65, 65, 0.1) !important} #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine .tarteaucitronName b, #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert b, #tarteaucitronAlertSmall #tarteaucitronCookiesNumber, #tarteaucitronAlertSmall #tarteaucitronManager, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle b, #tarteaucitron #tarteaucitronInfo a, html body #tarteaucitronRoot div#tarteaucitronInfo, #tarteaucitron .tarteaucitronH1, #tarteaucitron .tarteaucitronName tarteaucitronH2,#tarteaucitronAlertBig #tarteaucitronDisclaimerAlert strong, #tarteaucitron .tarteaucitronTitle button {color:#ffffff !important} #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine, #tarteaucitronAlertBig, #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert, #tarteaucitronAlertSmall, .tac_activate, .tac_activate .tac_float, .tac_activate .tac_float b, #tarteaucitron #tarteaucitronClosePanel, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronClosePanelCookie, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesTitle:hover, #tarteaucitron #tarteaucitronInfo, #tarteaucitron #tarteaucitronServices .tarteaucitronDetails, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle, #tarteaucitronAlertSmall #tarteaucitronCookiesListContainer #tarteaucitronCookiesList .tarteaucitronTitle, #tarteaucitron #tarteaucitronServices .tarteaucitronMainLine:hover, div#tarteaucitronServices, #tarteaucitron #tarteaucitronServices .tarteaucitronTitle button {background: #414141 !important;color:#ffffff !important}#tarteaucitronAlertBig #tarteaucitronCloseAlert {color: #414141 !important;background:#ffffff !important}html body #tarteaucitronRoot #tarteaucitronAlertBig, html body #tarteaucitronRoot span#tarteaucitronDisclaimerAlert{background-color:#414141!important}html body #tarteaucitronRoot #tarteaucitronAlertBig span{color:#fff!important}html body #tarteaucitronRoot div#tarteaucitronAlertBig:before, html body #tarteaucitronRoot #tarteaucitronAlertBig span ul li, html body #tarteaucitronRoot #tarteaucitronAlertBig span b{color:#fff!important}html body #tarteaucitronRoot button.tarteaucitronAllow{background-color:#0071ce!important}html body .tac_activate .tac_float .tarteaucitronAllow {background-color:#0071ce!important}head .tarteaucitron-magic-block button {display: none;}.tarteaucitron-magic-block button {border-radius: 4px;background-color:#0071ce!important;cursor: pointer;display: inline-block;padding: 6px 10px;text-align: center;text-decoration: none;width: auto;border: 0;cursor:pointer;}html body #tarteaucitronRoot button.tarteaucitronAllow{color:#fff!important}html body .tac_activate .tac_float .tarteaucitronAllow, html body #tarteaucitronRoot .tarteaucitronCheck:before{color:#fff!important}.tarteaucitron-magic-block button {color:#fff!important}html body #tarteaucitronRoot button.tarteaucitronDeny{background-color:#ff3700!important}html body #tarteaucitronRoot button.tarteaucitronDeny{color:#fff!important}html body #tarteaucitronRoot .tarteaucitronCross:before{color:#fff!important}html body #tarteaucitronRoot #tarteaucitronCloseAlert{background-color:#f5f5f5!important}html body #tarteaucitronRoot #tarteaucitronCloseAlert{color:#414141!important}html body #tarteaucitronRoot #tarteaucitronPrivacyUrl{background-color:#414141!important}html body #tarteaucitronRoot #tarteaucitronPrivacyUrl{color:#ffffff!important}html body #tarteaucitronRoot li.tarteaucitronLine.tarteaucitronIsAllowed{border-color:#0071ce!important}html body #tarteaucitronRoot li.tarteaucitronLine.tarteaucitronIsDenied{border-color:#ff3700!important}html body #tarteaucitronRoot #tarteaucitronDotGreen{background-color:#0071ce!important}html body #tarteaucitronRoot #tarteaucitronDotRed{background-color:#ff3700!important}';
        customTheme.type = 'text/css';
        if (customTheme.styleSheet) {
            customTheme.styleSheet.cssText = cssRule;
        } else {
            customTheme.appendChild(document.createTextNode(cssRule));
        }
        document.getElementsByTagName('head')[0].appendChild(customTheme);
        tarteaucitron.job = tarteaucitron.job || [];
        tarteaucitron.uuid = 'ce1bd3fe35a9371b0a4c8267afb8e0bb3e2c878b';

        function tarteaucitronProLoadServices() {}
        tarteaucitron.domain = 'construction-osterreich.arcelormittal.com';
        tarteaucitronProLoadServices();
        tarteaucitron.init({
            "showDetailsOnClick": true,
            "groupServices": true,
            "mandatory": true,
            "AcceptAllCta": true,
            "DenyAllCta": true,
            "cookieslist": false,
            "adblocker": false,
            "european": true,
            "hashtag": "#tarteaucitron",
            "highPrivacy": true,
            "orientation": "bottom",
            "removeCredit": true,
            "showAlertSmall": false,
            "privacyUrl": "https:\/\/construction-osterreich.arcelormittal.com\/en\/cookie-policy",
            "cookieName": "tarteaucitron",
            "closePopup": false,
            "enablemagic": true,
            "expireindays": 365,
            "handleBrowserDNTRequest": false,
            "moreInfoLink": true,
            "readmoreLink": "https:\/\/construction-osterreich.arcelormittal.com\/en\/cookie-policy",
            "iconSrc": "",
            "showIcon": true,
            "iconPosition": "BottomRight",
            "bodyPosition": "bottom",
            "serviceDefaultState": "wait"
        });
        setTimeout(function() {
            tarteaucitronIsMagicPossible = false;
        }, 101);
    });
}