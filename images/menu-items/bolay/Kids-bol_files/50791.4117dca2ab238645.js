"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50791],{25124:function(a,b,c){c.d(b,{f:function(){return m},zw:function(){return l}});var d=c(7297),e=c(10071),f=c(87379);function g(){var a=(0,d.Z)(["\n  margin-left: 0 !important;\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n  margin-left: ","px !important;\n"]);return h=function(){return a},a}function i(){var a=(0,d.Z)([""]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n  margin: auto;\n  padding: ","px 0 ","px 0;\n"]);return j=function(){return a},a}function k(){var a=(0,d.Z)(["\n  min-height: ","px;\n"]);return k=function(){return a},a}(0,f.default)(e.Icon).attrs(function(){return{type:e.Icon.Types.LogoDoordash,size:e.Icon.Sizes.Medium,color:e.Icon.Colors.SystemRed60}}).withConfig({componentId:"sc-445064c-0"})(g()),(0,f.default)(e.Icon).attrs(function(){return{type:e.Icon.Types.LogoGoogle,size:18,useDefaultColors:!0}}).withConfig({componentId:"sc-445064c-1"})(h(),e.Spacing.XxxxSmall),(0,f.default)(e.Text).attrs(function(){return{styles:e.Text.Styles.Medium14,color:e.Text.Colors.SystemGrey60}}).withConfig({componentId:"sc-445064c-2"})(i());var l=f.default.div.withConfig({componentId:"sc-445064c-3"})(j(),e.Spacing.XLarge,e.Spacing.XLarge),m=f.default.div.withConfig({componentId:"sc-445064c-4"})(k(),2*e.Spacing.XxxxLarge)},53132:function(a,b,c){c.d(b,{u:function(){return h}});var d=c(7297),e=c(44119),f=c.n(e);function g(){var a=(0,d.Z)(["\n  fragment UgcPhotoDetailsFragment on PhotoDetails {\n    title\n    subtitle\n    photoUuid\n    photoUrl\n    submissionTimeDisplayString\n    createdAt\n    reviewerData {\n      displayName\n      profileImage {\n        url\n      }\n    }\n    photoTaggedItems {\n      itemId\n      itemIdStr\n      itemName\n      price {\n        currency\n        displayString\n        decimalPlaces\n        unitAmount\n        sign\n        symbol\n      }\n      image {\n        url\n      }\n      categoryName\n    }\n  }\n"]);return g=function(){return a},a}var h=f()(g())},444:function(a,b,c){c.d(b,{AH:function(){return j},WF:function(){return i},rv:function(){return k}});var d=c(10253),e=c(3532),f=c(11459),g=c(31212),h={TARGET_TYPE_STORE:1,TARGET_TYPE_ITEM:4},i=function(a,b,c,e,g){var i,j=[];return j.push({target:{targetId:parseInt(e,10),targetType:h.TARGET_TYPE_STORE},starRating:a,reviewText:c,displayStatusNew:f.OB.REVIEW_DISPLAY_STATUS_PUBLIC,markedUpReviewText:g}),j.concat((i=Array.from(b,function(a){var b=(0,d.Z)(a,2),c=b[0],e=b[1];return{itemId:c,itemRating:e}})).map(function(a){return{target:{targetId:a.itemId,targetType:h.TARGET_TYPE_ITEM},ratingInfo:{ratingType:f.IA.RATING_TYPE_VOTE_RATING,ratingValue:a.itemRating}}}))},j=function(){window.open("https://help.doordash.com/consumers/s/article/Review-Guidelines?language=en_US","_blank"),(0,e.ZP)("store_review_click_review_guidelines")},k=function(a,b,c){return null!=b?"".concat(a," • ").concat((0,g.fI)(b,c)):a}},75821:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(85893),e=c(10071),f=c(67294),g=c(58258),h=c(29815),i=[e.Colors.SystemTeal40,e.Colors.SystemTeal50,e.Colors.SystemTeal60,e.Colors.SystemTeal70,e.Colors.SystemYellow30,e.Colors.SystemYellow40,e.Colors.SystemYellow50,e.Colors.SystemYellow60,e.Colors.SystemGreen40,e.Colors.SystemGreen50,e.Colors.SystemGreen60,e.Colors.SystemGreen70,e.Colors.SystemRed40,e.Colors.SystemRed50,e.Colors.SystemRed60,e.Colors.SystemRed70,e.Colors.SystemBlue40,e.Colors.SystemBlue50,e.Colors.SystemBlue60,e.Colors.SystemBlue70,],j=function(a){var b=(0,h.Z)(a).reduce(function(a,b){return a+b.charCodeAt(0)},0)%i.length,c=i[b];return c},k=f.memo(function(a){var b=a.reviewerDisplayName,c=j(b);return(0,d.jsx)(g.VE,{color:c,children:(0,d.jsx)(e.Text,{styles:e.Text.Styles.Medium18,color:e.Text.Colors.TextPrimaryOnDark,children:b.charAt(0).toLocaleUpperCase()})})}),l=k},58258:function(a,b,c){c.d(b,{Tm:function(){return j},VE:function(){return k},uj:function(){return l}});var d=c(7297),e=c(10071),f=c(87379);function g(){var a=(0,d.Z)(["\n  flex-shrink: 0;\n  width: ","px;\n  height: ","px;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: ","px;\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n  flex-shrink: 0;\n  width: ","px;\n  height: ","px;\n  border-radius: ","px;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return h=function(){return a},a}function i(){var a=(0,d.Z)(["\n  width: 100%;\n  white-space: pre-wrap;\n"]);return i=function(){return a},a}var j=f.default.div.withConfig({componentId:"sc-fb540403-0"})(g(),38,38,function(a){return a.imageUrl},e.BorderRadius.XLarge),k=f.default.div.withConfig({componentId:"sc-fb540403-1"})(h(),38,38,e.BorderRadius.XLarge,function(a){return a.color}),l=f.default.div.withConfig({componentId:"sc-fb540403-2"})(i())},48492:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(85893),e=c(31280);c(67294);var f=c(10071),g=c(7297),h=c(87379);function i(){var a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: ","px;\n"]);return i=function(){return a},a}function j(){var a=(0,g.Z)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]);return j=function(){return a},a}function k(){var a=(0,g.Z)(["\n  min-width: ","px;\n  max-width: ","px;\n  padding-bottom: ","px;\n  height: 0;\n"]);return k=function(){return a},a}function l(){var a=(0,g.Z)(["\n  min-height: ","px;\n  padding: 0 ","px;\n  border-radius: ","px;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: 0.15s ease-in-out;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return l=function(){return a},a}var m=h.default.div.withConfig({componentId:"sc-b3332099-0"})(i(),64),n=(0,h.default)(f.Text).attrs(function(){return{styles:f.Text.Styles.Body1}}).withConfig({componentId:"sc-b3332099-1"})(j()),o=h.default.div.withConfig({componentId:"sc-b3332099-2"})(k(),64,64,64),p=h.default.a.withConfig({componentId:"sc-b3332099-3"})(l(),f.Spacing.XLarge,f.Spacing.XSmall,f.BorderRadius.Large,f.Colors.ButtonTertiaryBackground,f.Colors.ButtonTertiaryBackgroundHovered),q=c(11766),r=c(23685);function s(a){var b,c,g,h=a.item,i=a.viewItem,j=function(){h.itemId&&i("".concat(h.itemId))};return(0,d.jsx)(e.ZP,{title:(0,d.jsxs)(m,{children:[(0,d.jsx)(n,{children:null==h?void 0:h.itemName}),(0,d.jsx)(f.Text,{styles:f.Text.Styles.Medium14,color:f.Text.Colors.TextSecondary,children:null!==(g=null==h?void 0:null===(b=h.price)||void 0===b?void 0:b.displayString)&&void 0!==g?g:""})]}),titleMaxLines:3,isSeparatorVisible:!1,isSquished:!0,secondaryTitleStart:(null===(c=h.image)||void 0===c?void 0:c.url)&&(0,d.jsx)(o,{children:(0,d.jsx)(q.Z,{url:h.image.url,cssAllMediaWidth:"".concat(64,"px"),aspectRatio:"1:1",withBorderRadius:!0,ariaHidden:!0})}),secondaryTitleEnd:h.itemId&&(0,d.jsx)(p,{onClick:j,children:(0,d.jsx)(f.Text,{styles:f.Text.Styles.Body2Emphasis,children:r.ZP.t("ratingsStrings_view_item")})}),secondaryTitleAlignment:e.ZP.Alignment.Center,insetVerticalSize:f.Inset.Sizes.XxSmall,insetHorizontalSize:f.Inset.Sizes.XxxSmall,columnGapSize:f.Inset.Sizes.Small,onClick:j},h.itemId)}},88564:function(a,b,c){c.d(b,{Z:function(){return A}});var d=c(85893);c(67294);var e=c(74543),f=c(89718),g=c(24906),h=c(10071),i=c(27131),j=c(7297),k=c(87379);function l(){var a=(0,j.Z)(["\n  position: relative;\n  "," {\n    visibility: visible;\n    opacity: 1;\n  }\n  border-radius: ","px;\n  overflow: hidden;\n"]);return l=function(){return a},a}function m(){var a=(0,j.Z)(["\n  background-color: ",";\n  height: ","px;\n  ","\n"]);return m=function(){return a},a}function n(){var a=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return n=function(){return a},a}function o(){var a=(0,j.Z)(["\n  position: absolute;\n  text-align: right;\n  bottom: ","px;\n  right: ","px;\n  max-width: ","px;\n\n  > div {\n    display: block;\n  }\n"]);return o=function(){return a},a}function p(){var a=(0,j.Z)(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: ","px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  opacity: 0;\n  &:hover {\n    opacity: 1;\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,j.Z)(["\n  left: 0;\n  border-radius: ","px;\n  background-image: linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0.4) 0%,\n    rgba(0, 0, 0, 0) 80%\n  );\n"]);return q=function(){return a},a}function r(){var a=(0,j.Z)(["\n  right: 0;\n  border-radius: 0 ","px ","px 0;\n  background-image: linear-gradient(\n    -90deg,\n    rgba(0, 0, 0, 0.4) 0%,\n    rgba(0, 0, 0, 0) 80%\n  );\n"]);return r=function(){return a},a}var s=k.default.div.withConfig({componentId:"sc-d0b95bc8-0"})(l(),e.kG,h.BorderRadius.Small),t=k.default.div.withConfig({componentId:"sc-d0b95bc8-1"})(m(),h.Colors.BackgroundPrimaryInverted,400,function(a){return a.isLargeModal&&"height: ".concat(500,"px;")}),u=k.default.img.withConfig({componentId:"sc-d0b95bc8-2"})(n()),v=(0,k.default)(h.StackChildren).withConfig({componentId:"sc-d0b95bc8-3"})(o(),h.Spacing.Small,h.Spacing.Small,320),w=k.default.div.withConfig({componentId:"sc-d0b95bc8-4"})(p(),h.Spacing.XxxLarge),x=(0,k.default)(w).withConfig({componentId:"sc-d0b95bc8-5"})(q(),h.BorderRadius.Small),y=(0,k.default)(w).withConfig({componentId:"sc-d0b95bc8-6"})(r(),h.BorderRadius.Small,h.BorderRadius.Small),z=c(10709);function A(a){var b,c=a.ugcImages,j=a.setCurrExpandedPhotoIndex,k=a.currExpandedPhotoIndex,l=a.isLargeModal,m=null;return(0,d.jsxs)(s,{children:[(0,d.jsx)(i.Z,{swipeOptions:{startSlide:k,transitionEnd:function(a){return j(a)}},ref:function(a){return m=a},children:null==c?void 0:c.map(function(a,c){var e;return(null==a?void 0:a.photoUrl)&&(0,d.jsxs)(t,{isLargeModal:!!l,children:[(0,d.jsx)(u,{src:a.photoUrl,alt:"Item ".concat(c+1),loading:"lazy"}),(0,d.jsx)(v,{size:h.StackChildren.Sizes.XxSmall,children:null==a?void 0:null===(e=a.photoTaggedItems)||void 0===e?void 0:e.map(function(a,c){return a&&(0,d.jsx)("div",{children:(0,d.jsx)(z.default,{type:z.default.Types.InformationalEmphasis,leadingIcon:!0,leadingIconType:z.default.IconTypes.DealsFill,text:null!==(b=a.itemName)&&void 0!==b?b:""})},c)})})]},c+1)})}),(null==c?void 0:c.length)>1&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{onClick:function(){return null==m?void 0:m.prev()}}),(0,d.jsx)(y,{onClick:function(){return null==m?void 0:m.next()}}),(0,d.jsx)(e.kG,{type:f.bT.PREVIOUS,"data-testid":"inline-button-prev",children:(0,d.jsx)(g.IconButton,{accessibilityLabel:f.bT.PREVIOUS,iconType:h.Icon.Types.ChevronLeft,onClick:function(){return null==m?void 0:m.prev()},type:g.IconButton.Types.Plain,size:g.IconButton.Sizes.Small,isRaised:!0})}),(0,d.jsx)(e.kG,{type:f.bT.NEXT,"data-testid":"inline-button-next",children:(0,d.jsx)(g.IconButton,{accessibilityLabel:f.bT.NEXT,iconType:h.Icon.Types.ChevronRight,onClick:function(){return null==m?void 0:m.next()},type:g.IconButton.Types.Plain,size:g.IconButton.Sizes.Small,isRaised:!0})})]})]})}},27441:function(a,b,c){var d=c(85893),e=c(10071),f=c(67294),g=c(75821),h=c(58258),i=f.memo(function(a){var b,c,f,i=a.submissionTimeText,j=a.reviewerData,k=null==j?void 0:j.displayName;return k?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.Stack,{size:e.Stack.Sizes.XxSmall,children:(0,d.jsxs)(e.InlineChildren,{size:e.InlineChildren.Sizes.XxSmall,justifyContent:e.InlineChildren.Justification.FlexStart,alignItems:e.InlineChildren.Alignment.Center,children:[(null==j?void 0:null===(b=j.profileImage)||void 0===b?void 0:b.url)?(0,d.jsx)(h.Tm,{imageUrl:null!==(f=null==j?void 0:null===(c=j.profileImage)||void 0===c?void 0:c.url)&&void 0!==f?f:""}):(0,d.jsx)(g.Z,{reviewerDisplayName:null!=k?k:""}),(0,d.jsxs)(e.StackChildren,{size:e.StackChildren.Sizes.None,children:[(0,d.jsx)(e.Text,{styles:e.Text.Styles.Body2Emphasis,children:k}),(0,d.jsx)(e.Text,{styles:e.Text.Styles.Caption2,color:e.Icon.Colors.SystemGrey60,children:i})]})]})})}):(0,d.jsx)(d.Fragment,{})});b.Z=i},31212:function(a,b,c){c.d(b,{C1:function(){return l},GS:function(){return n},Ji:function(){return r},Lf:function(){return v},Ow:function(){return s},S1:function(){return w},fI:function(){return u},j8:function(){return o},lK:function(){return q},mh:function(){return p},tZ:function(){return t},xL:function(){return m}});var d=c(11459);c(444);var e=c(3532),f=c(80008),g=c.n(f),h=c(53639),i=c(73716),j=c(23685),k=c(67294),l={RATING_VALUE_UPVOTE:6,RATING_VALUE_DOWNVOTE:7},m=5,n=4.7,o=5,p=function(a,b){return null==b?void 0:b.find(function(b){return b.orderUuid===a})},q=function(a,b,c,f){f===d.Wc.RATING_VALUE_DOWNVOTE&&(0,e.ZP)("rate_action_select_thumb",{store_id:b,order_uuid:a,item_id:c,response:"down"}),f===d.Wc.RATING_VALUE_UPVOTE&&(0,e.ZP)("rate_action_select_thumb",{store_id:b,order_uuid:a,item_id:c,response:"up"})},r=function(a,b){return a?(0,h.formatDateTimeFromIsoString)({isoString:a,locale:b,dateOptions:{year:"2-digit",month:i.IntlDateFormatOptions.NUMERIC,day:i.IntlDateFormatOptions.NUMERIC},timeZone:g().tz.guess()}):""},s=function(a){for(var b=new Set,c=0;c<a.length;c++){var d=a[c];null!=d&&null!=d.id&&b.add(d.id)}return b},t=function(a,b,c,d){(0,e.ZP)("card_click",{item_id:a,store_id:b,review_id:c,container:"review_text",page:d})},u=function(a,b){var c=g()(a),d=g()(),e=d.startOf("day").diff(c.startOf("day"),"days");switch(e){case 0:return j.ZP.t("ratingsStrings_review_ordered_today");case 1:return j.ZP.t("ratingsStrings_review_ordered_yesterday");default:return r(a,b)}},v=function(a,b){var c=g()(a),d=g()(),e=d.startOf("day").diff(c.startOf("day"),"days");return 0===e?j.ZP.t("ratingsStrings_review_ordered_today"):1===e?j.ZP.t("ratingsStrings_one_day_ago"):e>1&&e<7?j.ZP.t("ratingsStrings_days_ago",{num:e}):r(a,b)},w=function(a,b){var c=k.useRef(null),d=k.useRef(),e=k.useMemo(function(){return b},[b,]);return k.useEffect(function(){if(!e)return d.current=new IntersectionObserver(a),c.current&&d.current.observe(c.current),function(){d.current&&d.current.disconnect()}},[c,a,e]),{containerRef:c}}}}])