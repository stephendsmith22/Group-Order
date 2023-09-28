"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47598],{21919:function(a,b,c){c.d(b,{H4:function(){return l},lN:function(){return k},vx:function(){return m}});var d=c(26042),e=c(7297),f=c(93241),g=c(80133),h=c(66949),i=c(11459);function j(){var a=(0,e.Z)(["\n  query listCarts($input: ListCartsInput!) {\n    listCarts(input: $input) {\n      ...ConsumerOrderCartFragment\n    }\n  }\n  ","\n"]);return j=function(){return a},a}var k=function(a){return{input:{cartContextFilter:{experienceCase:i.R2.MULTI_CART_EXPERIENCE_CONTEXT,multiCartExperienceContext:{storeId:a}}}}},l=(0,g.Ps)(j(),h.h6),m=function(a,b){var c=(0,f.a)(l,(0,d.Z)({variables:(0,d.Z)({},a)},b)),e=c.data,g=c.loading,h=c.error,i=null==e?void 0:e.listCarts;return{data:i,loading:g,error:h}}},18507:function(a,b,c){c.d(b,{N:function(){return i}});var d=c(47715),e=c(70573),f=c(54425),g=c(93395),h=c(67294),i=function(){var a=(0,f.useExperience)().isDoorDash,b=(0,g.useConsumerQuery)(),c=b.consumer,i=b.loading,j=h.useContext(e.DVSClientContext),k=j.state,l=(0,e.useDVSBoolean)(d.PR.retailPersistentCart,!1);return{isPersistentCartEnabled:l&&a&&!c.isGuest,isPersistentCartDVEvaluating:"loading"===k||i}}},99171:function(a,b,c){c.d(b,{K:function(){return j},O:function(){return i}});var d=c(10253),e=c(67294),f=c(18507),g=c(21919),h=c(45166),i=e.createContext({orderCart:null,isLoading:!1,isPersistentCartEnabled:!1,cartHasError:!1,isStorePage:!1,persistentCartStoreId:"",setPersistentCartStoreId:function(){},showMaxCartsModal:!1,setShowMaxCartsModal:function(){}}),j=function(a){var b,c,i=a.consumer,j=a.storeId,k=a.isToggledToPickup,l=a.setIsToggledToPickup,m=a.groupCartId,n=a.fetchPolicy,o=(0,f.N)(),p=o.isPersistentCartEnabled,q=o.isPersistentCartDVEvaluating,r=(0,d.Z)(e.useState(!1),2),s=r[0],t=r[1],u=(0,d.Z)(e.useState(null!=j?j:""),2),v=u[0],w=u[1],x=(0,h.S)(v),y=x.isStorePage,z=x.isGroupCartPage,A=x.shouldShowOpenCarts,B=(0,g.lN)(j||v),C=(0,g.vx)(B,{skip:!p||A||z||!!m||!v,fetchPolicy:null!=n?n:"cache-first"}),D=C.data,E=C.loading,F=C.error;return p&&y?(b=D&&D[0],c=!!F||(null==b?void 0:b.hasError),(null==b?void 0:b.isConsumerPickup)&&!k&&(null==l||l(!0))):b=i.orderCart,(z||m)&&(b=null),{orderCart:null!=b?b:null,isLoading:q||E,isPersistentCartEnabled:p,cartHasError:c,isStorePage:!!y,persistentCartStoreId:v,setPersistentCartStoreId:w,showMaxCartsModal:s,setShowMaxCartsModal:t}}},17510:function(a,b,c){c.d(b,{AA:function(){return t},LU:function(){return v},Yi:function(){return q},ee:function(){return u},iS:function(){return s},mj:function(){return p},"q$":function(){return r}});var d=c(7297),e=c(10071),f=c(87379);function g(){var a=(0,d.Z)(["\n  position: relative;\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n            /* The 65% is to support when field labels are not hidden. */\n            bottom: ",";\n          "]);return h=function(){return a},a}function i(){var a=(0,d.Z)(["\n      position: ",";\n\n      ","\n\n      ","\n    "]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n  padding-left: 0;\n  margin: 0;\n  background-color: ",";\n  border: 1px solid\n    ",";\n  border-radius: ","px;\n  overflow-y: auto;\n  /* Note: temporary styling, need to handle two layers in Popover */\n  z-index: 1000;\n  width: 100%;\n\n  ","\n\n  ","\n"]);return j=function(){return a},a}function k(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: inherit;\n  min-height: ","px;\n  border-top: 1px solid ",";\n  padding: ","px ","px;\n  background-color: ",";\n\n  &:first-child {\n    border-top: none;\n  }\n\n  &:last-child {\n    position: sticky;\n    bottom: 0;\n    width: 100%;\n  }\n"]);return k=function(){return a},a}function l(){var a=(0,d.Z)([""]);return l=function(){return a},a}function m(){var a=(0,d.Z)(["\n  cursor: pointer;\n"]);return m=function(){return a},a}function n(){var a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ","\n"]);return n=function(){return a},a}function o(){var a=(0,d.Z)(["\n  padding: ","px;\n  display: flex;\n  justify-content: flex-end;\n  ","\n\n  picture {\n    display: block;\n    width: ",";\n  }\n"]);return o=function(){return a},a}var p=f.default.div.withConfig({componentId:"sc-7981fc6f-0"})(g()),q=f.default.div.withConfig({componentId:"sc-7981fc6f-1"})(j(),e.Colors.PageBackgroundPrimary,function(a){return a.isNewDesignEnabled?e.Colors.BorderPrimary:e.Colors.BorderSecondary},e.BorderRadius.Small,function(a){return!a.isNewDesignEnabled&&"max-height: ".concat(250,"px;")},function(a){var b=a.isStaticPositionSuggestions,c=a.shouldFlipResults,d=a.isLabelHidden,g=a.isNewDesignEnabled;return(0,f.css)(i(),b?"static":"absolute",c?(0,f.css)(h(),d?"100%":"65%"):"top: 100%;",g&&"\n        border-radius: ".concat(e.BorderRadius.Large,"px;\n        box-shadow: ").concat(e.Shadows.Medium,";\n      "))}),r=(0,f.default)(e.Text).attrs(function(){return{styles:e.Text.Styles.Regular14}}).withConfig({componentId:"sc-7981fc6f-2"})(k(),e.Spacing.XxLarge,e.Colors.BorderSecondary,e.Spacing.XxxSmall,e.Spacing.Medium,function(a){return a.active?e.Colors.PageBackgroundSecondary:e.Colors.PageBackgroundPrimary}),s=f.default.div.withConfig({componentId:"sc-7981fc6f-3"})(l()),t=(0,f.default)(r).withConfig({componentId:"sc-7981fc6f-4"})(m()),u=f.default.div.withConfig({componentId:"sc-7981fc6f-5"})(n(),function(a){return a.hasMarginLeft&&"margin-left: ".concat(e.Spacing.XxSmall,"px;")}),v=f.default.div.withConfig({componentId:"sc-7981fc6f-6"})(o(),e.Spacing.Small,function(a){return a.hasBorderTop&&"border-top: 1px solid ".concat(e.Colors.BorderPrimary,";")},function(a){var b=a.size;return"".concat(b,"px")})},34551:function(a,b,c){c.d(b,{e:function(){return j},f:function(){return i}});var d=c(85893),e=c(67294),f=c(42849),g=c(34155),h=e.createContext({isStaticPosition:!1,isEnabled:!1,showBoxShadow:!0,addressSuggestions:[],queryCalled:!1,shouldRenderAddressSuggestions:!1,showErrorMessage:!1,showSuggestionsList:!1,showNearByTitleWithLoading:!1,showGetCurrentLocationButton:!1,isLoading:!1,shouldStartFetchingAddress:!1,providerExistsAsParent:!1,fetchGeoLocationAddresses:function(){},requestGeoLocationPermissionOnLoad:!1}),i=function(){var a,b=e.useContext(h);return(null==g?void 0:null===(a=g.env)||void 0===a?void 0:"production")!=="development"||(null==b?void 0:b.providerExistsAsParent)||console.error("useGeoLocationSuggestionsContext must be used within a GeoLocationSuggestionsProvider"),b},j=function(a){var b=a.isEnabled,c=void 0!==b&&b,g=a.isStaticPosition,i=a.showBoxShadow,j=a.children,k=a.showSuggestionOnInputFocus,l=void 0!==k&&k,m=a.requestGeoLocationPermissionOnLoad,n=void 0!==m&&m,o=(0,f.T)(),p=o.fetchGeoLocationAddresses,q=o.addressList,r=o.loading,s=o.geoError,t=o.addressFetchError,u=o.geoLocationPermission,v=o.queryCalled,w=o.addressExistsOnSessionStorage,x=c&&(null==u?void 0:u.state)!==(null===f.m||void 0===f.m?void 0:f.m.DENIED)&&!s&&!((null==u?void 0:u.state)===(null===f.m||void 0===f.m?void 0:f.m.PROMPT)&&n),y=v&&!q.length&&!r&&!(t&&!r),z=!(null==q?void 0:q.length)&&(null==u?void 0:u.state)===(null===f.m||void 0===f.m?void 0:f.m.PROMPT)&&!n,A=r&&!(null==q?void 0:q.length),B=t||y,C=!!(null==q?void 0:q.length)&&!B,D=(null==u?void 0:u.state)===(null===f.m||void 0===f.m?void 0:f.m.GRANTED)&&A&&!w,E=c&&((null==u?void 0:u.state)===(null===f.m||void 0===f.m?void 0:f.m.GRANTED)&&!w||n);e.useEffect(function(){E&&p()},[E]);var F=e.useMemo(function(){return{isEnabled:c,isStaticPosition:g,showBoxShadow:i,addressSuggestions:q,queryCalled:v,shouldRenderAddressSuggestions:x,showErrorMessage:B,showSuggestionsList:C,showNearByTitleWithLoading:D,showGetCurrentLocationButton:z,isLoading:A,shouldStartFetchingAddress:E,showSuggestionOnInputFocus:l,providerExistsAsParent:!0,fetchGeoLocationAddresses:p,requestGeoLocationPermissionOnLoad:n}},[c,g,i,q.length,v,x,B,C,z,D,A,null==u?void 0:u.state,E,l,p,n,]);return(0,d.jsx)(h.Provider,{value:F,children:j})}},949:function(a,b,c){c.d(b,{Ek:function(){return D},N:function(){return y},Y3:function(){return F},ct:function(){return E},jn:function(){return z},rb:function(){return A}});var d=c(7297),e=c(10071),f=c(87379),g=c(17510);function h(){var a=(0,d.Z)(["\n      box-shadow: ",";\n    "]);return h=function(){return a},a}function i(){var a=(0,d.Z)(["\n  ","\n  border-radius: ","px;\n  margin-top: ","px;\n"]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n      &:hover {\n        background-color: ",";\n      }\n    "]);return j=function(){return a},a}function k(){var a=(0,d.Z)(["\n      font-weight: ",";\n      padding: ","px ","px;\n    "]);return k=function(){return a},a}function l(){var a=(0,d.Z)(["\n      cursor: initial;\n    "]);return l=function(){return a},a}function m(){var a=(0,d.Z)(["\n    padding: 0 ","px;\n  "]);return m=function(){return a},a}function n(){var a=(0,d.Z)(["\n      padding: 0;\n    "]);return n=function(){return a},a}function o(){var a=(0,d.Z)(["\n      position: sticky;\n      z-index: 99;\n    "]);return o=function(){return a},a}function p(){var a=(0,d.Z)(["\n  font-size:15px;\n  color: ",";\n  padding: 0px ","px;\n  align-items: center;\n  min-height: ","px;\n  ","\n\n  ","  \n  ","\n  &:first-child {\n    border-bottom: none;\n    color: ",";\n  }\n  &:last-child {\n    position: static;\n  }\n  ","\n  ","\n  "," \n  .geo-location-address-list-cell-title {\n    font-size: 15px;\n  } \n "]);return p=function(){return a},a}function q(){var a=(0,d.Z)(["\n      margin-right: ","px;\n    "]);return q=function(){return a},a}function r(){var a=(0,d.Z)(["\n  margin-left: auto;\n  ","\n"]);return r=function(){return a},a}function s(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  line-height: ","px;\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0px;\n  font-size: 15px;\n"]);return s=function(){return a},a}function t(){var a=(0,d.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-column-gap: ","px;\n  padding: 0px;\n"]);return t=function(){return a},a}function u(){var a=(0,d.Z)(["\n    padding: 0px;\n    font-weight: 600;\n  "]);return u=function(){return a},a}function v(){var a=(0,d.Z)(["\n  font-family: inherit;\n  max-width: 100%;\n  font-weight: bold;\n  text-align: left;\n  color: ",";\n  ",";\n  padding: ","px ","px;\n  ","\n"]);return v=function(){return a},a}function w(){var a=(0,d.Z)(["\n  min-height: ","px;\n  display: flex;\n  flex-direction: row;\n  align-items: top;\n  width: 100%;\n  font-family: inherit;\n  div > div {\n    padding-left: 0px;\n  }\n  > div:first-of-type {\n    padding: 0px !important;\n  }\n"]);return w=function(){return a},a}function x(){var a=(0,d.Z)(["\n  font-weight: bold;\n  color: ",";\n  ",";\n  align-items: center;\n  text-align: left;\n  svg {\n    vertical-align: middle;\n  }\n"]);return x=function(){return a},a}var y=(0,f.default)(g.Yi).attrs(function(a){return{tabindex:a.tabIndex}}).withConfig({componentId:"sc-497a9119-0"})(i(),function(a){return a.showBoxShadow&&(0,f.css)(h(),e.Shadows.Base)},e.BorderRadius.Small,e.Spacing.XxxxSmall),z=(0,f.default)(g.AA).attrs(function(a){return{tabindex:a.tabIndex}}).withConfig({componentId:"sc-497a9119-1"})(p(),e.Colors.TextSecondary,e.Spacing.Large,36,function(a){return a.hover&&(0,f.css)(j(),e.Colors.BackgroundSecondary)},function(a){return a.isTitle&&(0,f.css)(k(),e.Text.Weights.Bold,e.Spacing.XxSmall,e.Spacing.Large)},function(a){return!a.clickAble&&(0,f.css)(l())},e.Colors.TextSecondary,e.Media.MobileOnly(m(),e.Spacing.XxSmall),function(a){return a.disablePadding&&(0,f.css)(n())},function(a){return a.sticky&&(0,f.css)(o())}),A=f.default.div.withConfig({componentId:"sc-497a9119-2"})(r(),function(a){return a.addRightMargin&&(0,f.css)(q(),e.Spacing.Large)}),B=f.default.button.withConfig({componentId:"sc-497a9119-3"})(s(),e.Text.LineHeights.S14),C=(0,f.css)(t(),e.Spacing.Small),D=(0,f.default)(B).withConfig({componentId:"sc-497a9119-4"})(v(),e.Colors.TextSecondary,C,e.Spacing.XxxxSmall,e.Spacing.Large,e.Media.MobileOnly(u())),E=(0,f.default)(B).withConfig({componentId:"sc-497a9119-5"})(w(),36),F=f.default.span.withConfig({componentId:"sc-497a9119-6"})(x(),e.Colors.TextError,C)},58651:function(a,b,c){c.d(b,{Z:function(){return x}});var d=c(67294),e=c(34551),f=c(26042),g=c(85893),h=c(10071),i=c(949),j=c(11890),k=c(31280),l=c(23685),m=c(3532),n=c(92114),o=function(a){var b=a.isEnabled,c=void 0!==b&&b,e=a.inputFieldId,f=a.suggestionsContainerRef,g=a.queryCalled,h=void 0!==g&&g,i=(0,d.useState)(!c),j=i[0],k=i[1];return(0,d.useEffect)(function(){if(c&&e){var a=function(a){var b;(null==f?void 0:null===(b=f.current)||void 0===b?void 0:b.contains(a.relatedTarget))||k(!1)},b=function(a){var b,c=a.target;(null==c?void 0:null===(b=c.value)||void 0===b?void 0:b.length)||k(!0)},d=document.getElementById(e);return null==d||d.addEventListener("focus",b),null==d||d.addEventListener("blur",a),function(){null==d||d.removeEventListener("focus",b),null==d||d.removeEventListener("blur",a)}}return c&&!e&&console.error("GeolocationSuggestions component won't work as expected. We need to provide `inputFieldId` prop if `showSuggestionOnInputFocus` is disabled"),function(){}},[]),(0,d.useEffect)(function(){if(c&&h&&j){var a=document.getElementById(e);null==a||a.focus()}},[h,e,c,j]),{showUI:j}},p=function(a){var b=a.loading,c=a.onClick,d=a.hideGetLocationButton;return(0,g.jsxs)(i.jn,{disablePadding:!0,hover:!0,children:[!d&&(0,g.jsxs)(i.Ek,{onClick:c,"data-testid":"geo-location-address-suggestions-button",children:[(0,g.jsx)(h.Icon,{type:h.Icon.Types.LocationPinEnabledFill,size:h.Icon.Sizes.Medium}),l.ZP.t("address_suggestion_use_current_location")]}),b&&(0,g.jsx)(i.rb,{addRightMargin:!0,children:(0,g.jsx)(j.default,{size:j.default.Sizes.Small,"data-testid":"geo-location-address-suggestions-loading-indicator"})})]})},q=function(a){var b=a.address,c=a.onSelect;return(0,g.jsx)(i.jn,{hover:!0,onClick:function(){(0,m.ZP)("cx_geo_location_address_suggestion_address_click",{address:b}),c(b)},children:(0,g.jsx)(i.ct,{children:(0,g.jsx)(k.ZP,{iconStart:{isInteractive:!1,type:h.Icon.Types.LocationPointerFill,size:h.Icon.Sizes.Medium},title:b.street,subtext:"".concat(b.city,", ").concat(b.state," ").concat(b.zipCode),size:k.ZP.Sizes.Small,insetSize:k.ZP.InsetSizes.ModalActionButtonsInline,isSeparatorVisible:!1,isToggled:!1,isSquished:!0,titleOverrides:{className:"geo-location-address-list-cell-title"}})})})},r=function(){return(0,g.jsx)(i.jn,{clickAble:!1,onMouseDown:function(a){return a.preventDefault()},"data-testid":"geo_location_address_suggestions_error_message",children:(0,g.jsxs)(i.Y3,{children:[(0,g.jsx)(h.Icon,{type:h.Icon.Types.ErrorFill,color:h.Icon.Colors.TextError}),l.ZP.t("address_suggestion_error_message")]})})},s=function(a){var b=a.loading;return(0,g.jsxs)(i.jn,{clickAble:!1,onMouseDown:function(a){return a.preventDefault()},sticky:!0,isTitle:!0,children:[l.ZP.t("address_suggestion_nearby_addresses"),void 0!==b&&b&&(0,g.jsx)(i.rb,{children:(0,g.jsx)(j.default,{size:j.default.Sizes.Small})})]})},t=d.memo(function(a){var b=a.onAddressSelect,c=void 0===b?function(){}:b,f=a.addressPickerInputId,h=a.isAddressPickerInputEmpty,j=a.renderItemAfterContent,k=a.enableHoverOnItemAfterContent,l=a.hideGetLocationButton,n=(0,e.f)(),t=n.showGetCurrentLocationButton,u=n.showNearByTitleWithLoading,v=n.isLoading,w=n.showSuggestionsList,x=n.showErrorMessage,y=n.addressSuggestions,z=n.shouldRenderAddressSuggestions,A=n.isStaticPosition,B=n.showBoxShadow,C=n.showSuggestionOnInputFocus,D=n.fetchGeoLocationAddresses,E=n.queryCalled,F=function(){D(),(0,m.ZP)("cx_geo_location_address_suggestion_get_current_location_button_click")},G=d.useRef(null),H=o({isEnabled:C,inputFieldId:void 0===f?null:f,suggestionsContainerRef:G,queryCalled:E}),I=H.showUI;return z&&I&&(void 0===h||h)?(0,g.jsxs)(i.N,{isLabelHidden:!0,shouldFlipResults:!1,isStaticPositionSuggestions:A,showBoxShadow:B,"data-testid":"geo-location-address-suggestions-container",ref:G,tabIndex:-1,isNewDesignEnabled:!1,children:[t&&(0,g.jsx)(p,{onClick:F,loading:v,hideGetLocationButton:void 0!==l&&l}),u&&(0,g.jsx)(s,{loading:v}),x&&(0,g.jsx)(r,{}),w&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{}),y.map(function(a){return(0,g.jsx)(q,{address:a,onSelect:function(){return c(a)}},a.printableAddress)})]}),j&&(0,g.jsx)(i.jn,{hover:void 0!==k&&k,children:j})]}):null});t.displayName="GeoLocationAddressSuggestions";var u=function(a){return(0,e.f)().isEnabled?(0,g.jsx)(n.Z,{children:(0,g.jsx)(t,(0,f.Z)({},a))}):null};u.displayName="GeoLocationAddressSuggestionsContainer";var v=d.memo(u),w=function(){return null};w.Provider=e.e,w.List=v;var x=w},92114:function(a,b,c){var d=c(67294),e=function(a){var b=a.children,c=(0,d.useState)(!1),e=c[0],f=c[1];return((0,d.useEffect)(function(){f(!0)},[]),e)?b:null};b.Z=e},533:function(a,b,c){c.d(b,{kF:function(){return j}});var d=c(70573),e=c(47715),f=c(88311),g=c(54425),h=function(){var a=(0,g.useExperience)().isDoorDash;return(0,f.ac)().isMobile&&a},i=function(){var a=h();return(0,d.useDVSBoolean)(e.PR.redesignMWebLoggedOutHeader,!1)&&a},j=function(){var a=h();return(0,d.useDVSBoolean)(e.PR.redesignMWebLoggedInHeader,!1)&&a},k=function(){var a=i();return j()||a};b.ZP=k},42849:function(a,b,c){c.d(b,{m:function(){return d},T:function(){return B}});var d,e=c(47568),f=c(26042),g=c(69396),h=c(34051),i=c.n(h),j=c(67294),k=c(99534),l=c(10253),m=c(7297),n=c(80133),o=c(74180);function p(){var a=(0,m.Z)(["\n  query getAddressByPoint($lat: Float!, $lng: Float!) {\n    getAddressByPoint(lat: $lat, lng: $lng) {\n      addressesList {\n        city\n        street\n        city\n        zipCode\n        state\n        countryShortname\n        printableAddress\n        lat\n        lng\n        id\n      }\n    }\n  }\n"]);return p=function(){return a},a}var q,r=(0,n.Ps)(p()),s=function(){var a,b,c=(0,l.Z)((0,o.t)(r,{fetchPolicy:"network-only",errorPolicy:"all"}),2),d=c[0],e=c[1],g=e.loading,h=e.error,i=e.data,m=e.called,n=j.useMemo(function(){var a,b;return(null==i?void 0:null===(a=i.getAddressByPoint)||void 0===a?void 0:null===(b=a.addressesList)||void 0===b?void 0:b.filter(function(a){return a.city&&a.street&&a.zipCode}).map(function(a){var b=a.id,c=(0,k.Z)(a,["id"]);return(0,f.Z)({},c,{googlePlaceId:b,shortname:a.street})}))||[]},[null==i?void 0:null===(a=i.getAddressByPoint)||void 0===a?void 0:a.addressesList]);return{getAddressQuery:d,loading:g,called:m,error:h||(null==i?void 0:null===(b=i.getAddressByPoint)||void 0===b?void 0:b.addressesList)===null,data:n}},t=c(44221),u=c(3532),v=c(87620),w=c(89261),x="dd-geo-location-user-addresses",y=function(a){var b=a.fetchedAddressList,c=void 0===b?[]:b,d=a.isEnabled,e=void 0===d||d,f=a.storageTtlInHour,g=void 0===f?4:f,h=(0,j.useState)([]),i=h[0],k=h[1],l=(0,j.useState)([]),m=l[0],n=l[1];return(0,j.useEffect)(function(){var a,b=w.N1.get(x)||{},c=b.timeCreated,d=b.addressList;Date.now()<c+36e5*(a=g)?n(d):(w.N1.delete(x),n([]))},[]),(0,j.useEffect)(function(){e&&(m.length&&!c.length?k(m):c.length&&(w.N1.set(x,{timeCreated:Date.now(),addressList:c}),k(c)))},[c.length,e,m.length]),{addressExistsOnSessionStorage:!!m.length,addressList:i}},z=function(){var a=(0,j.useState)(!0),b=a[0],c=a[1];return(0,j.useEffect)(function(){c(!1)},[]),b};(q=d||(d={})).PROMPT="prompt",q.GRANTED="granted",q.DENIED="denied";var A={state:null,GRANTED:d.GRANTED,PROMPT:d.PROMPT,DENIED:d.DENIED},B=function(){var a,b,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h=c.useSessionStorage,k=(0,j.useState)(null),l=k[0],m=k[1],n=s(),o=n.getAddressQuery,p=n.loading,q=n.data,r=n.error,w=n.called,x=y({fetchedAddressList:q,isEnabled:(void 0===h||h)&&l===d.GRANTED}),B=x.addressExistsOnSessionStorage,C=x.addressList,D=z(),E=(0,t.Z)({usePermissionsApi:!1,isServerSide:D}),F=E.error,G=E.updateCurrentPosition,H=E.loading,I=E.position,J=E.grantedGeolocationPermission,K=E.hasAskedForGeolocationPermission;(0,v.ZP)(function(){(null==C?void 0:C.length)&&(0,u.ZP)("cx_use_geo_location_address_suggestions_fetch_success",{addressList:C})},[C]),(0,j.useEffect)(function(){var a;null==navigator||null===(a=navigator.permissions)||void 0===a||a.query({name:"geolocation"}).then(function(a){l===d.PROMPT&&a.state===d.GRANTED?(0,u.ZP)("cx_use_geo_location_address_permission_granted"):l===d.PROMPT&&a.state===d.DENIED&&(0,u.ZP)("cx_use_geo_location_address_permission_denied"),m(a.state),a.onchange=function(){m(a.state)}})},[F,null==I?void 0:null===(a=I.coords)||void 0===a?void 0:a.latitude,null==I?void 0:null===(b=I.coords)||void 0===b?void 0:b.longitude]),(0,j.useEffect)(function(){navigator.permissions||(K&&!J?m(d.DENIED):K&&J?m(d.GRANTED):m(d.PROMPT))},[K,J]);var L=(0,j.useCallback)((0,e.Z)(i().mark(function a(){var b,c,d;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(!F&&!H)){a.next=13;break}return a.prev=1,a.next=5,G();case 5:o({variables:{lat:(null==(d=a.sent)?void 0:null===(b=d.coords)||void 0===b?void 0:b.latitude)||0,lng:(null==d?void 0:null===(c=d.coords)||void 0===c?void 0:c.longitude)||0}}),(null==navigator?void 0:navigator.permissions)||K||J||(0,u.ZP)("cx_use_geo_location_address_permission_granted"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),(null===a.t0||void 0===a.t0?void 0:a.t0.code)===(null===a.t0||void 0===a.t0?void 0:a.t0.PERMISSION_DENIED)?(null==navigator?void 0:navigator.permissions)||(0,u.ZP)("cx_use_geo_location_address_permission_denied"):r?(0,u.ZP)("cx_use_geo_location_address_suggestions_fetch_error",{error:r}):(0,u.ZP)("cx_use_geo_location_address_permission_error",a.t0);case 13:case"end":return a.stop()}},a,null,[[1,10]])})),[]);return{addressList:C.length?C:[],fetchGeoLocationAddresses:L,geoLocationPermission:(0,g.Z)((0,f.Z)({},A),{state:l}),loading:H||p,geoError:!!F,addressFetchError:!!r,queryCalled:w,addressExistsOnSessionStorage:B}}},44221:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(26042),e=c(67294),f=c(89261),g=c(43947),h=c(47568),i=c(34051),j=c.n(i),k=function(a){return(null==a?void 0:a.state)==="granted"},l=function(a){return(null==a?void 0:a.state)==="denied"},m=function(a){return(null==a?void 0:a.state)==="prompt"},n=function(a){var b,c=a.isServerSide,d=a.permissionName,f=a.onChange,i=a.skip,n=void 0!==i&&i,o=(0,e.useState)(!n),p=o[0],q=o[1],r=(0,e.useState)(null),s=r[0],t=r[1],u=(0,e.useState)(""),v=u[0],w=u[1],x=Boolean(!c&&(null==navigator?void 0:navigator.permissions));return(0,e.useEffect)(function(){var a,b=!1,c=function(a){b||t(a)},e=(a=(0,h.Z)(j().mark(function a(){var e;return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return q(!0),a.prev=1,a.next=4,navigator.permissions.query({name:d});case 4:(e=a.sent).onchange=function(){b||(c(this),null==f||f({isGranted:k(this),isDenied:l(this),isPrompt:m(this)}))},b||c(e),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),w(a.t0),(0,g.Tb)(Error("[Permissions API] ".concat(a.t0.message)));case 13:return a.prev=13,q(!1),a.finish(13);case 16:case"end":return a.stop()}},a,null,[[1,9,13,16]])})),function(){return a.apply(this,arguments)});return n||(x?e():(q(!1),w("Browser does not support Permissions API"))),function(){b=!0}},[x,d,n,f]),{error:v,isLoading:p,permissionState:null!==(b=null==s?void 0:s.state)&&void 0!==b?b:null,isGranted:k(s),isDenied:l(s),isPrompt:m(s)}},o="ddweb-geolocation-permission",p={enableHighAccuracy:!1,timeout:15e3,maximumAge:0},q=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=a.overrides,c=a.track,h=a.isServerSide,i=void 0!==h&&h,j=a.usePermissionsApi,k=void 0!==j&&j,l=a.skip,m=void 0!==l&&l,q=(0,d.Z)({},p,b),r=(0,f.XR)(),s=r.get(o),t=(0,e.useCallback)(function(a){a&&(a.isGranted?r.set(o,"true"):a.isDenied?r.set(o,"false"):a.isPrompt&&r.delete(o))},[r]),u=n({isServerSide:i,permissionName:"geolocation",onChange:t,skip:m||!k}),v=u.isGranted,w=u.isPrompt,x=u.isLoading,y=u.error,z=!k||x||y?s:v,A=k&&!x?!w:null!==z,B=(0,e.useState)(null),C=B[0],D=B[1],E=(0,e.useState)(null),F=E[0],G=E[1],H=(0,e.useState)(!m&&k&&A&&z),I=H[0],J=H[1],K=function(a){r.set(o,"true"),null==c||c.success(a),D(a),J(!1)},L=function(a){1===a.code&&(r.set(o,"false"),null==c||c.error(a)),G(a),J(!1),3===a.code&&(0,g.Tb)(Error("[Geolocation API] ".concat(a.message)))};i||(null==navigator?void 0:navigator.geolocation)||L({message:"Geolocation is not supported"});var M=function(){return J(!0),new Promise(function(a,b){return navigator.geolocation.getCurrentPosition(function(b){K(b),a(b)},function(a){L(a),b(a||Error("Geolocation error, getCurrentPosition failed with no exception"))},q)})};return{position:C,error:F,loading:I||k&&x,hasAskedForGeolocationPermission:A,updateCurrentPosition:M,grantedGeolocationPermission:!!z}}},38917:function(a,b,c){c.d(b,{Z:function(){return i},f:function(){return h}});var d=c(10253),e=c(85893),f=c(67294),g=f.createContext({isMenuSideSheetVisible:!1,setIsMenuSideSheetVisible:function(){}}),h=function(a){var b=a.children,c=(0,d.Z)(f.useState(!1),2),h=c[0],i=c[1],j=f.useMemo(function(){return{isMenuSideSheetVisible:h,setIsMenuSideSheetVisible:i}},[h,i]);return(0,e.jsx)(g.Provider,{value:j,children:b})},i=function(){return f.useContext(g)}},45166:function(a,b,c){c.d(b,{S:function(){return h}});var d=c(18507),e=c(43595),f=c(11977),g=c(8385),h=function(a){var b=(0,f.lO)().pageType,c=(0,d.N)(),h=c.isPersistentCartEnabled,i=c.isPersistentCartDVEvaluating;if(!b)return{isStorePage:!!a,isGroupCartPage:!1,shouldShowOpenCarts:!1};var j=[g.G.Store,g.G.StorePageSSR,g.G.Reviews],k=!!a||(0,e.NQ)(b)||j.includes(b),l=b===g.G.GroupCartSSR,m=b===g.G.DoubleDash,n=!(k||l||m)&&h&&!i;return{isStorePage:k,isGroupCartPage:l,shouldShowOpenCarts:n}}},50607:function(a,b,c){c.d(b,{M:function(){return d}});var d=c(67294).createContext({isFirstVisit:!0,isPersistentCartEnabled:!1,showMultiCartModal:!1,setShowMultiCartModal:function(){},renderAwarenessModal:function(){}})},52918:function(a,b,c){c.d(b,{JU:function(){return x},K9:function(){return u},YI:function(){return d},"_o":function(){return s},fg:function(){return w},oR:function(){return r},sX:function(){return v},tF:function(){return t}});var d,e,f=c(26042),g=c(10253),h=c(67294),i=c(50607),j=c(89261),k=c(68470),l=c(93146),m=c(34521),n=c(31451),o=c(18507),p=c(23685),q="dd-web-multicart-visit";(e=d||(d={})).POPUP="popup",e.BANNER="banner";var r=function(a,b){if(!a||!a.restaurant||!a.orders)return!1;var c,d,e,f,g=null!==(e=null===(c=a.restaurant)||void 0===c?void 0:c.id)&&void 0!==e?e:"",h=null!==(f=null===(d=a.orders)||void 0===d?void 0:d.length)&&void 0!==f?f:0;return!!(a.isConvenienceCart&&g&&g!==b&&h>0)},s=function(a,b){var c={};if(!h.useContext(i.M).isPersistentCartEnabled&&r(a,b)){var d,e,f=null!==(e=null==a?void 0:null===(d=a.restaurant)||void 0===d?void 0:d.id)&&void 0!==e?e:"";c={fallbackContext:"saved_cart_store:".concat(f)}}return c},t=function(a,b){var c=(0,g.Z)(h.useState(!1),2),e=c[0],f=c[1],i=(0,g.Z)(h.useState(!(0,j.vQ)(q)),2),l=i[0],m=i[1],n=function(){(0,j.pC)(q,"1",31536e3),m(!1),f(!0);var c={storeId:a,businessId:null!=b?b:"",attr_src:d.POPUP};k.EY.logSaveCartInfoView(c)},p=(0,o.N)(),r=p.isPersistentCartEnabled,s=p.isPersistentCartDVEvaluating,t=function(){};return!s&&r?{isFirstVisit:!1,isPersistentCartEnabled:r,renderAwarenessModal:t,showMultiCartModal:!1,setShowMultiCartModal:t}:{isFirstVisit:l,isPersistentCartEnabled:r,renderAwarenessModal:n,showMultiCartModal:e,setShowMultiCartModal:f}},u=function(){var a=h.useRef(""),b=(0,n.R)(),c=b.addToast,d=b.removeToast;return h.useEffect(function(){return function(){a.current&&d(a.current)}},[d]),{displayToast:function(b){var d=b.isError,e=b.text,f=b.duration,g=c({duration:f,isError:d,text:e});a.current=g}}},v=function(a,b,c){var d,e,g,j=h.useContext(i.M),k=j.isFirstVisit,l=j.renderAwarenessModal,o=j.isPersistentCartEnabled,q=(0,n.R)().addToast,r=null!==(g=null==a?void 0:null===(d=a.restaurant)||void 0===d?void 0:null===(e=d.business)||void 0===e?void 0:e.name)&&void 0!==g?g:"";return!o&&b&&r?{renderMultiCartToast:function(){q((0,f.Z)({duration:m.VW.Durations.Medium,isError:!1,text:p.ZP.t("convenience_savedCart_saveGrocery",{storeName:r})},k&&!c&&{action:{text:p.ZP.t("stores_learnMore"),onClick:l}}))}}:{}},w=function(a,b,c,d){var e,f,g,h,i,j,l,m={storeId:b,businessId:c,sourceCartId:null!==(i=null==a?void 0:a.id)&&void 0!==i?i:"",numItems:null!==(j=null==a?void 0:null===(e=a.orders)||void 0===e?void 0:null===(f=e[0])||void 0===f?void 0:null===(g=f.orderItems)||void 0===g?void 0:g.length)&&void 0!==j?j:0,destStoreId:null!==(l=null==a?void 0:null===(h=a.restaurant)||void 0===h?void 0:h.id)&&void 0!==l?l:""};return d?{logSaveCart:function(a){a?k.EY.logSaveCartSave(m):k.EY.logSaveCartError(m)}}:{}},x=function(){return h.useContext(l.ZP).storeInformation}},59942:function(a,b){var c=function(a){var b=encodeURIComponent("%");return a.replace(/%(?![a-fA-F\d][a-fA-F\d]+)/g,b)},d=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!a)return a;var b=c(a);return decodeURIComponent(b)};b.Z=d},21718:function(a,b,c){var d,e;c.d(b,{N:function(){return d}}),(e=d||(d={})).APP="app",e.CNG="cng",e.DOUBLEDASH="doubledash",e.PICKUP="pickup",e.SEO="seo",e.STATIC_BUSINESS="staticBusiness",e.STORE="store",e.UNKNOWN="unknown"},43595:function(a,b,c){c.d(b,{Lt:function(){return f},NQ:function(){return i},gn:function(){return h},r6:function(){return g}});var d=c(59942),e=c(8385);function f(a){var b;return(null==(b=a)?void 0:b.subCategoryId)?a.subCategoryId:a.categoryId}var g=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",b=a.split("-");if(b.length>1){var c=b.pop(),d=b.join("-");return{prefix:d,id:c}}return{id:a}},h=function(a){var b=a.activeCategoryUrlSlug,c=a.currentCategoryUrlSlug,e=a.currentCategoryId;return b===c||e===g(b).id||e===(0,d.Z)(b)},i=function(a){return[e.G.ConvenienceCategorySSR,e.G.ConvenienceCollectionSSR,e.G.ConvenienceCollectionsFeedSSR,e.G.ConvenienceReorderSSR,e.G.ConvenienceSearchResultsSSR,e.G.ConvenienceStoreSSR,e.G.ConvenienceProduct,e.G.ConvenienceProductSSR,e.G.ConvenienceOOSProduct,e.G.ConvenienceCollection,e.G.ConvenienceListSSR,e.G.ConvenienceCursorItemCarouselSSR,].includes(a)}},2588:function(a,b,c){c.d(b,{OO:function(){return o},Tq:function(){return n},Wt:function(){return p},aJ:function(){return m},jc:function(){return l},np:function(){return q}});var d=c(7297),e=c(10071),f=c(87379);function g(){var a=(0,d.Z)(["\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  & > * {\n    pointer-events: auto;\n  }\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  ",": 0;\n"]);return h=function(){return a},a}function i(){var a=(0,d.Z)(["\n  box-shadow: ",";\n  width: ",";\n  height: 100vh;\n  overflow: auto;\n  position: relative;\n  padding-top: ","px;\n  ",";\n"]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  background: ",";\n"]);return j=function(){return a},a}function k(){var a=(0,d.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);return k=function(){return a},a}var l=352,m=f.default.div.withConfig({componentId:"sc-2931bd9a-0"})(g()),n=f.default.div.withConfig({componentId:"sc-2931bd9a-1"})(h(),function(a){return a.side}),o=(0,e.withTheming)(f.default.div.withConfig({componentId:"sc-2931bd9a-2"})(i(),e.Shadows.Large,function(a){return a.isMobile?"100vw":"".concat(l,"px")},function(a){return a.showNavBar?a.scrollPadding:0},function(a){var b=a.hasCarouselItems,c=a.theme;return"background-color: ".concat(b?c.Colors.BackgroundSecondary:c.Colors.BackgroundPrimary,";")})),p=(0,e.withTheming)(f.default.div.withConfig({componentId:"sc-2931bd9a-3"})(j(),function(a){return a.theme.Colors.PageBackgroundPrimary})),q=f.default.div.withConfig({componentId:"sc-2931bd9a-4"})(k())},36756:function(a,b,c){c.d(b,{Qc:function(){return h},ev:function(){return g}});var d,e,f,g,h,i,j,k,l,m,n=c(70573),o=c(47715),p=c(4082);(i=d||(d={})).CONTROL="control",i.TREATMENT_ARM_1="treatment_1",i.TREATMENT_ARM_2="treatment_2",i.TREATMENT_ARM_4="treatment_4",(j=e||(e={})).CONTROL="control",j.TREATMENT="treatment",(k=f||(f={})).CONTROL="control",k.TREATMENT="treatment",(l=g||(g={})).CONTROL="control",l.TREATMENT_CAROUSELS="treatment_carousels",(m=h||(h={})).CONTROL="control",m.TREATMENT_CAROUSELS="treatment_carousels",m.TREATMENT_BIG_MAP="treatment_big_map";var q=function(){var a="true"===(0,p.bp)().clientCookies.get("cx_seo_experiments_control_override"),b=(0,n.useDVSString)(o.PR.seoLoggedOutHomePageV3,"control"),c=(0,n.useDVSBoolean)(o.PR.seoLoggedOutHomePageCTA,!1);return a?{isSEOInternalLinksExperiment:!1,isSEOLoggedOutHomePageCTAEnabled:!0,isSEOLoggedOutV3UIEnabled:!1,isSEOLoggedOutV3Arm1Enabled:!1,isSEOLoggedOutV3Arm2Enabled:!1,isSEOLoggedOutV3Arm4Enabled:!1}:{isSEOInternalLinksExperiment:!1,isSEOLoggedOutHomePageCTAEnabled:c,isSEOLoggedOutV3UIEnabled:b===d.TREATMENT_ARM_1||b===d.TREATMENT_ARM_2,isSEOLoggedOutV3Arm1Enabled:b===d.TREATMENT_ARM_1,isSEOLoggedOutV3Arm2Enabled:b===d.TREATMENT_ARM_2,isSEOLoggedOutV3Arm4Enabled:b===d.TREATMENT_ARM_4}};b.ZP=q}}])