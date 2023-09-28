"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58745],{38243:function(a,b){function c(a){var b=0,c=0,d=0;4==a.length?(b=parseInt(a[1]+a[1],16),c=parseInt(a[2]+a[2],16),d=parseInt(a[3]+a[3],16)):7==a.length&&(b=parseInt(a[1]+a[2],16),c=parseInt(a[3]+a[4],16),d=parseInt(a[5]+a[6],16));var e=Math.min(b/=255,c/=255,d/=255),f=Math.max(b,c,d),g=f-e,h=0,i=0,j=0;return(h=Math.round(60*(h=0==g?0:f==b?(c-d)/g%6:f==c?(d-b)/g+2:(b-c)/g+4)))<0&&(h+=360),j=(f+e)/2,i=+(100*(i=0==g?0:g/(1-Math.abs(2*j-1)))).toFixed(1),j=+(100*j).toFixed(1),[h,i,j]}function d(a,b,c){var d=c/100,e=b*Math.min(d,1-d)/100,f=function(b){var c=(b+a/30)%12;return Math.round(255*(d-e*Math.max(Math.min(c-3,9-c,1),-1))).toString(16).padStart(2,"0")};return"#".concat(f(0)).concat(f(8)).concat(f(4))}function e(a,b){var e=c(a),f=e[0],g=e[1],h=e[2];return d(f,g,b>=0?Math.min(h+b,100):Math.max(0,h+b))}function f(a){var b=c(a),e=b[0],f=b[1];return d(e,f,95)}function g(a){var b=c(a),e=b[0],f=b[1];return d(e,f,10)}function h(a){if(!a)return!1;var b=a.startsWith("#")?a.substring(1):a;return!/[a-zA-Z0-9]/.test(b)||6!==b.length}Object.defineProperty(b,"__esModule",{value:!0}),b.getMenuImageUrls=b.buildGoogleCssNameFromName=b.buildGoogleLinkFromUrl=b.parseCssName=b.parseHtmlLink=b.copyLink=b.getPreviewLink=b.hasError=b.validateAllColors=b.validateColor=b.calculateDerivedColors=b.makeDarker=b.makeLighter=b.incrementLightness=b.hslToHex=b.hexToHsl=void 0,b.hexToHsl=c,b.hslToHex=d,b.incrementLightness=e,b.makeLighter=f,b.makeDarker=g,b.calculateDerivedColors=function(a){var b,d,h,i,j,k,l,m,n,o=(b=a.background,!!b&&c(b)[2]<50),p=a.background&&"#FFFFFF"===a.background.toUpperCase();return{isDarkTheme:o,lightBrand:f(a.brandPrimary),darkBrand:g(a.brandPrimary),lightBrandHover:e(a.brandPrimary,20),darkBrandHover:e(a.brandPrimary,-20),lightBrandSecondary:e(null!==(d=a.brandSecondary)&&void 0!==d?d:a.brandPrimary,20),darkBrandSecondary:e(null!==(h=a.brandSecondary)&&void 0!==h?h:a.brandPrimary,-20),lightBackground:e(null!==(i=a.background)&&void 0!==i?i:"#FFFFFF",20),darkBackground:e(null!==(j=a.background)&&void 0!==j?j:"#FFFFFF",-20),bodyTextColor:o?"#ffffff":"#191919",border:o?e(null!==(k=a.background)&&void 0!==k?k:"#FFFFFF",28):e(null!==(l=a.background)&&void 0!==l?l:"#000000",-10),inputFieldBackground:p?"":o?e(null!==(m=a.background)&&void 0!==m?m:"#FFFFFF",20):e(null!==(n=a.background)&&void 0!==n?n:"#000000",-5)}},b.validateColor=h,b.validateAllColors=function(a){return{brandPrimary:h(a.base.brandPrimary||""),brandSecondary:h(a.base.brandSecondary||""),textPrimary:h(a.base.textPrimary||""),background:h(a.base.background||"")}},b.hasError=function(a){return Object.values(a.colors).reduce(function(a,b){return a||b},!1)},b.getPreviewLink=function(a){return"https://order.online/business/-".concat(a,"/en-US?hideModal=true&pickup=true&preview=true")},b.copyLink=function(a){var b=null==window?void 0:window.navigator;b&&b.clipboard.writeText(a)},b.parseHtmlLink=function(a){var b,c;return null===(c=null===(b=new DOMParser().parseFromString("<div>".concat(a,"</div>"),"text/html").getElementsByTagName("link").item(2))||void 0===b?void 0:b.getAttribute("href"))||void 0===c?void 0:c.replace("&display=swap","")},b.parseCssName=function(a){var b=a.split(":");return b.length>1?b[1].trim():null},b.buildGoogleLinkFromUrl=function(a){return'\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="'.concat(a,'" rel="stylesheet">\n')},b.buildGoogleCssNameFromName=function(a){return"font-family: ".concat(a)},b.getMenuImageUrls=function(a){return"https://img.cdn4dd.com/s/managed/merchant/storefront/admin_tool_customization/".concat(a,".svg")}},58745:function(a,b,c){b.jG=b.Bc=void 0,c(41970);var d=c(13446);Object.defineProperty(b,"Bc",{enumerable:!0,get:function(){return d.calculateCheckoutOverrides}}),Object.defineProperty(b,"jG",{enumerable:!0,get:function(){return d.calculateMenuOverrides}})},41970:function(a,b,c){var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0}),b.useStorefrontTheme=b.StorefrontThemeProvider=void 0;var e=d(c(67294)),f=c(13446),g=c(10071),h=e.default.createContext({designLanguageTheme:g.Themes.Doordash,storefrontTheme:void 0}),i=function(a){var b=a.children,c=a.storefrontTheme,d=a.baseOverrides,g=c?(0,f.calculateThemeOverrides)(c):null!=d?d:{};return e.default.createElement(h.Provider,{value:{designLanguageTheme:g,storefrontTheme:c}},b)};b.StorefrontThemeProvider=i;var j=function(){return e.default.useContext(h).storefrontTheme};b.useStorefrontTheme=j},13446:function(a,b,c){var d=this&&this.__assign||function(){return(d=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};Object.defineProperty(b,"__esModule",{value:!0}),b.calculateMenuOverrides=b.calculateCheckoutOverrides=b.calculateThemeOverrides=void 0;var e=c(10071),f=c(38243),g=function(a){return{checkoutOverrides:(0,b.calculateCheckoutOverrides)(a),menuOverrides:(0,b.calculateMenuOverrides)(a)}};b.calculateThemeOverrides=g;var h=function(a){var b,c,f=a.colors.base,g=f.brandPrimary,h=f.brandSecondary,i=a.colors.derived,j=i.isDarkTheme,k=i.lightBrand,l=i.lightBrandSecondary,m=i.darkBrandSecondary,n=i.lightBrandHover,o=i.darkBrandHover,p=(null===(b=a.borderRadius)||void 0===b?void 0:b.buttonShape)==="sharp"?e.Shape.Rectangle:e.Shape.Pill,q=(null===(c=a.borderRadius)||void 0===c?void 0:c.buttonShape)==="sharp"?{ButtonDefault:2,ButtonToggleGround:2,FieldsInputDefault:2,FieldsInputConnectedWrapperDefault:2,ModalDefault:2,ButtonToggleGroupSmall:2,ButtonToggleGroupMedium:2,ButtonToggleGroupLarge:2,ButtonToggleGroupXLarge:2}:{};return{Colors:{ToggleBackgroundOn:g,ToggleBorderOn:g,LoadingDefault:g,BannerHighlightIcon:g,BannerNegativeBackground:k,ButtonPrimaryBackground:null!=h?h:g,ButtonPrimaryBackgroundHovered:j?null!=m?m:o:null!=l?l:n,ButtonPrimaryBackgroundPressed:j?null!=m?m:o:null!=l?l:n,ButtonPrimaryToggleBackground:g,ButtonPrimaryToggleBorderOn:g,ButtonPrimaryToggleGroupBackgroundOnDefault:g,ButtonPrimaryToggleGroupBackgroundOn:g,ButtonPrimaryToggleBackgroundHovered:n,ButtonPrimaryToggleBorderOnHovered:n,ButtonPrimaryToggleBackgroundPressed:n,ButtonPrimaryToggleBorderOnPressed:n,ButtonPrimaryToggleBackgroundOffHovered:e.Colors.SystemGrey0,ButtonPrimaryToggleBackgroundOffPressed:e.Colors.SystemGrey0,ButtonPrimaryToggleBorderOffHovered:e.Colors.SystemGrey0,ButtonPrimaryToggleBorderOffPressed:e.Colors.SystemGrey0,ButtonPrimaryToggleForegroundHovered:e.Colors.SystemWhite,ButtonPrimaryToggleForegroundPressed:e.Colors.SystemWhite,ButtonPrimaryToggleForegroundOffHovered:e.Colors.SystemBlack,ButtonPrimaryToggleGroupBorderOn:g,ButtonPrimaryToggleGroupBackgroundOnHovered:n,ButtonPrimaryToggleGroupBorderOnHovered:n,ButtonPrimaryToggleGroupBackgroundPressed:n,ButtonPrimaryToggleGroupBorderOnPressed:n,ButtonFlatPrimaryForeground:g,ButtonFlatPrimaryForegroundHovered:g,ButtonFlatPrimaryForegroundPressed:g,ButtonLinkForeground:g,ButtonLinkForegroundHovered:g,ButtonLinkForegroundPressed:g,ButtonSecondaryToggleGroupBackgroundOn:g,ButtonTertiaryToggleGroupBackgroundOn:g,MapPinSelectedBackgroundDefault:g,MapPinUnselectedBackgroundDefault:g,MapPinSelectedBorderDefault:g,MapPinUnselectedForegroundDefault:g,MapPinSelectedForegroundDefault:g,TextAction:g,TextLink:e.Colors.TextPrimary,BrandOceanText:e.Colors.TextPrimary},Shape:{ButtonDefault:p,ButtonToggle:p,ButtonToggleGroup:p},BorderRadius:d({},q)}};b.calculateCheckoutOverrides=h;var i=function(a){var b,c,g,h,i,j,k=a.colors.base,l=k.background,m=k.brandPrimary,n=k.brandSecondary,o=a.colors.derived,p=o.lightBackground,q=o.lightBrand,r=o.darkBrand,s=o.darkBackground,t=o.isDarkTheme,u=o.lightBrandSecondary,v=o.darkBrandSecondary,w=o.lightBrandHover,x=o.darkBrandHover,y=o.border,z=o.inputFieldBackground,A=(null===(c=null===(b=null==a?void 0:a.colors)||void 0===b?void 0:b.base)||void 0===c?void 0:c.textPrimary)||(t?e.Colors.TextPrimaryOnDark:e.Colors.TextPrimary),B=a.fonts&&"default"!==a.fonts.default.type?{FontFamily:a.fonts.default.name}:{},C=(null===(g=a.borderRadius)||void 0===g?void 0:g.buttonShape)==="sharp"?e.Shape.Rectangle:e.Shape.Pill,D=(null===(h=a.borderRadius)||void 0===h?void 0:h.buttonShape)==="sharp"?{ButtonDefault:2,ButtonToggleGround:2,FieldsInputDefault:2,FieldsInputConnectedWrapperDefault:2,ModalDefault:2,ButtonToggleGroupSmall:2,ButtonToggleGroupMedium:2,ButtonToggleGroupLarge:2,ButtonToggleGroupXLarge:2}:{},E=t?e.Colors.SystemGrey80:l,F=t?null===(i=null==a?void 0:a.colors)||void 0===i?void 0:i.base.brandSecondary:null===(j=null==a?void 0:a.colors)||void 0===j?void 0:j.base.brandPrimary,G=l&&(a.colors.derived.isDarkTheme?(0,f.incrementLightness)(l,15):(0,f.incrementLightness)(l,-3));return{Colors:{PageBackgroundPrimary:l,PageBackgroundSecondary:t?s:p,ModalBackground:l,ButtonFabBackground:E,ButtonFabBackgroundHovered:E,ButtonFabBackgroundPressed:E,ButtonFabBackgroundDisabled:E,ButtonFlatPrimaryForeground:m,ButtonFlatPrimaryForegroundHovered:t?x:w,BackgroundPrimary:l,BackgroundSecondary:G,ToggleBackgroundOn:m,ToggleBackgroundOff:l,ToggleForegroundOn:l,ToggleForegroundOff:p,ToggleBorderOn:m,ToggleBorderOff:e.Colors.SystemGrey20,ToggleBackgroundOffDisabled:t?e.Colors.SystemGrey90:e.Colors.SystemGrey10,LoadingDefault:m,BannerHighlightIcon:m,ButtonPrimaryBackground:null!=n?n:m,ButtonPrimaryBackgroundHovered:t?null!=v?v:x:null!=u?u:w,ButtonPrimaryBackgroundPressed:t?null!=v?v:x:null!=u?u:w,ButtonPrimaryToggleBackground:m,ButtonPrimaryToggleBorderOn:m,ButtonPrimaryToggleBackgroundOff:t?e.Colors.SystemGrey80:e.Colors.SystemGrey5,ButtonPrimaryToggleBorderOff:t?e.Colors.SystemGrey80:e.Colors.SystemGrey5,ButtonPrimaryToggleForeground:e.Colors.SystemWhite,ButtonPrimaryToggleForegroundOff:t?e.Colors.SystemWhite:e.Colors.SystemBlack,ButtonPrimaryToggleBackgroundHovered:t?x:w,ButtonPrimaryToggleBorderOnHovered:t?x:w,ButtonPrimaryToggleBackgroundPressed:t?x:w,ButtonPrimaryToggleBorderOnPressed:t?x:w,ButtonPrimaryToggleBackgroundOffHovered:t?e.Colors.SystemGrey100:e.Colors.SystemGrey0,ButtonPrimaryToggleBackgroundOffPressed:t?e.Colors.SystemGrey100:e.Colors.SystemGrey0,ButtonPrimaryToggleBorderOffHovered:t?e.Colors.SystemGrey100:e.Colors.SystemGrey0,ButtonPrimaryToggleBorderOffPressed:t?e.Colors.SystemGrey100:e.Colors.SystemGrey0,ButtonPrimaryToggleForegroundHovered:e.Colors.SystemWhite,ButtonPrimaryToggleForegroundPressed:e.Colors.SystemWhite,ButtonPrimaryToggleForegroundOffHovered:t?e.Colors.SystemWhite:e.Colors.SystemBlack,ButtonPlainBackground:l,ButtonPlainBackgroundPressed:l,ButtonPlainForeground:A,ButtonPlainForegroundHovered:A,ButtonPlainForegroundPressed:A,ButtonPlainForegroundDisabled:t?e.Colors.SystemGrey40:e.Colors.SystemGrey60,ButtonPlainToggleForeground:A,ButtonPlainBackgroundDisabled:l,ButtonPlainBackgroundHovered:l,ButtonFabForeground:A,ButtonFlatSecondaryForeground:A,ButtonFlatSecondaryForegroundHovered:A,WarningBackground:t?e.Colors.SystemYellow50:e.Colors.SystemYellow5,TextAction:m,TextLink:A,BannerNegativeBackground:t?r:q,BannerWarningBackground:t?e.Colors.SystemYellow50:e.Colors.BannerWarningBackground,BannerWarningIcon:t?e.Colors.SystemYellow30:e.Colors.BannerWarningIcon,TextPrimary:A,TextSecondary:t?e.Colors.TextSecondaryOnDark:e.Colors.TextSecondary,TextSelected:A,TextTertiary:t?e.Colors.SystemGrey40:e.Colors.SystemGrey70,TextHighlight:t?e.Colors.SystemTeal50:e.Colors.SystemTeal60,BorderPrimary:y,BorderSecondary:y,BorderTertiary:y,ButtonPrimaryToggleGroupBorderOn:m,ButtonPrimaryToggleGroupBackgroundOnDefault:m,ButtonPrimaryToggleGroupBackgroundOn:m,ButtonPrimaryToggleGroupBackgroundOnHovered:t?x:w,ButtonPrimaryToggleGroupBorderOnHovered:t?x:w,ButtonPrimaryToggleGroupBackgroundOnPressed:t?x:w,ButtonPrimaryToggleGroupBorderOnPressed:t?x:w,ButtonSecondaryToggleGroupBackgroundOn:m,ButtonTertiaryToggleGroupBackgroundOn:m,MenuItemBackground:l,TextAccentedSecondary:t?"#4D4D4D":e.Colors.SystemGrey5,ListCellContainerBackgroundDefault:l,ListCellContainerBackgroundHovered:t?s:l,ListCellContainerBackgroundPressed:l,MapPinSelectedBackgroundDefault:m,MapPinUnselectedBackgroundDefault:m,MapPinSelectedBorderDefault:m,MapPinUnselectedForegroundDefault:m,MapPinSelectedForegroundDefault:m,MapCurrentLocationBackgroundDefault:m,MapPinUnselectedForegroundFood:m,FieldsForegroundPlaceholder:t?e.Colors.TextSecondaryOnDark:e.Colors.TextSecondary,FieldsInputBackground:l,FieldsInputBorder:t?e.Colors.SystemGrey5:e.Colors.SystemGrey10,FieldsBorderInactive:t?e.Colors.SystemGrey90:e.Colors.SystemGrey0,FieldsBackgroundInactive:z||e.Colors.FieldsBackgroundInactive,FieldsBackgroundActive:z||e.Colors.FieldsBackgroundInactive,FieldsForegroundInactive:A,FieldsForegroundActive:A,FieldsBackgroundError:t?e.Colors.SystemRed90:e.Colors.SystemRed5,FieldsBackgroundDisabled:t?e.Colors.SystemGrey90:e.Colors.SystemGrey0,FieldsBorderDisabled:t?e.Colors.SystemGrey90:e.Colors.SystemGrey0,FieldsBorderActive:t?e.Colors.SystemGrey5:e.Colors.SystemBlack,GlobalSecondary:m,TagPositiveDefaultBackground:t?r:q,TagPositiveDefaultBorder:t?r:q,TagPositiveDefaultForeground:F},Shape:{ButtonDefault:C,ButtonToggle:C,ButtonToggleGroup:C},BorderRadius:d({},D),Typography:d({},B)}};b.calculateMenuOverrides=i}}])