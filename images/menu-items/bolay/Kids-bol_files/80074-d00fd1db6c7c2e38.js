"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80074],{40782:function(a,b,c){var d=c(7297),e=c(87379);function f(){var a=(0,d.Z)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n"]);return f=function(){return a},a}var g=e.default.button.withConfig({componentId:"sc-a84a0ae3-0"})(f());b.Z=g},33085:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(85893),e=c(67294),f=c(88311),g=c(10253),h=c(10071),i=c(98923),j=c(43476),k=function(a){var b=a.arrowOccupiesSpace,c=a.isSinglePage,f=a.arrowIconWithBgColor,k=a.hasFades,l=a.hasArrowButtonBorder,m=a.children,n=e.useRef(null),o=(0,g.Z)(e.useState(1),2),p=o[0],q=o[1],r=(0,g.Z)(e.useState(2),2),s=r[0],t=r[1],u=(0,g.Z)(e.useState(0),2),v=u[0],w=u[1],x=n.current,y=x?k?(null==x?void 0:x.offsetWidth)-j.xX:null==x?void 0:x.offsetWidth:null;e.useEffect(function(){x&&p>1&&y?w(y*(p-1)):w(0)},[x,p,y]),e.useEffect(function(){x&&(0,i.X)({xCoord:v},x)},[v,x]);var z=p>1,A=p<s,B=function(){if(x&&y){var a=1===p?Math.ceil(x.scrollWidth/y):s;t(a),q(function(a){return a+1})}},C=function(){q(function(a){return a-1})},D=function(a){var b;return b="left"===a?f?h.Icon.Types.ArrowLeft:h.Icon.Types.ChevronLeft:f?h.Icon.Types.ArrowRight:h.Icon.Types.ChevronRight,(0,d.jsx)(j.Ee,{arrowIconWithBgColor:!!f,hasFades:k,children:(0,d.jsx)(h.Icon,{type:b,size:h.Icon.Sizes.Small,color:h.Icon.Colors.TextPrimary})})};return(0,d.jsxs)(j.lk,{hasFades:k,children:[(b||z)&&(0,d.jsx)(j.b4,{onClick:C,isHidden:!z,hasFades:k,children:l?(0,d.jsx)(j.pC,{children:D("left")}):D("left")}),(0,d.jsx)(j.l$,{ref:n,children:m}),(b||A&&!c)&&(0,d.jsx)(j.b4,{onClick:B,isHidden:!A,hasFades:k,children:l?(0,d.jsx)(j.pC,{children:D("right")}):D("right")})]})},l=function(a){var b=a.children,c=a.arrowOccupiesSpace,e=a.isSinglePage,g=a.arrowIconWithBgColor,h=a.hasFades,i=a.hasArrowButtonBorder,l=a.hideScrollBar,m=(0,f.ac)().isMobileTablet;return m?(0,d.jsx)(j.$C,{hideScrollBar:void 0!==l&&l,children:b}):(0,d.jsx)(k,{arrowOccupiesSpace:c,isSinglePage:e,arrowIconWithBgColor:g,hasFades:h,hasArrowButtonBorder:i,children:b})}},95513:function(a,b,c){c.d(b,{S:function(){return f}});var d=c(70573),e=c(47715),f=function(){return(0,d.useDVSBoolean)(e.PR.webIsItemModifiersEnabled,!1)}},2150:function(a,b,c){c.d(b,{D:function(){return g}});var d=c(70573),e=c(89261),f=function(a,b){return b.includes(a)},g=function(a,b,c){var g=(0,d.useDVSString)(a,String(c)),h=(0,e.vQ)(a);return f(h,b)?h:f(g,b)?g:c}},58197:function(a,b,c){c.d(b,{H:function(){return C}});var d=c(7297),e=c(85893),f=c(10071),g=c(67294),h=c(87379),i=c(91481),j=c(6269),k=c(23397),l=c(846),m={breakpoint:f.Breakpoints.Mobile,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.Small}},n=m,o=c(49188),p={breakpoint:o.n,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.Small}},q=p,r={breakpoint:f.Breakpoints.Tablet,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.Small}},s=r,t=c(14924),u={breakpoint:f.Breakpoints.Desktop,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.Large},card:(0,t.Z)({},k.kF.CARD_FLEXIBLE_ITEM_SQUARE,{count:5})},v=u,w={breakpoint:f.Breakpoints.WideScreen,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.XLarge}},x=w,y={breakpoint:o.AK,canvas:{width:"100%",margin:"".concat(f.Spacing.None,"px"),padding:f.Spacing.XLarge}},z=y;function A(){var a=(0,d.Z)(["\n  margin-top: ","px;\n"]);return A=function(){return a},a}var B=h.default.div.withConfig({componentId:"sc-b6e4a879-0"})(A(),f.Spacing.Medium),C=g.memo(function(a){if(!(null===(b=a.facetFeedResponse.body)||void 0===b?void 0:b.length))return null;var b,c,d=[n,q,s,v,x,z,];return(0,e.jsx)(B,{"data-testid":l.D.Common.LegoSection,children:(0,e.jsx)(j.Z,{entry:null!==(c=a.entry)&&void 0!==c?c:k.Dw.FACET,cursor:"",data:a.facetFeedResponse,layoutSpecsOverride:d,children:function(){return(0,e.jsx)(i.Z,{data:a.facetFeedResponse})}})})})},86770:function(a,b,c){c.d(b,{a:function(){return g}});var d=c(85893);c(67294);var e=c(46464),f=c(11890),g=function(a){var b=a.isFullPage;return(0,d.jsx)(e.l,{isFullPage:void 0!==b&&b,children:(0,d.jsx)(f.default,{})})}},46464:function(a,b,c){c.d(b,{l:function(){return g}});var d=c(7297),e=c(87379);function f(){var a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: ",";\n"]);return f=function(){return a},a}var g=e.default.div.withConfig({componentId:"sc-735e508e-0"})(f(),function(a){return a.isFullPage?"100vh":"50vh"})},79434:function(a,b,c){c.d(b,{S:function(){return af.Si},A:function(){return au}});var d,e,f=c(26042),g=c(69396),h=c(10253),i=c(85893),j=c(10709),k=c(10071),l=c(67294),m=c(70131),n=c(69769),o=c(11766),p=c(11351),q=c(41875),r=c(846),s=c(15781),t=c(59839),u=c(31063),v=c(94546),w=c(47568),x=c(34051),y=c.n(x),z=c(34521),A=c(51927),B=c(50607),C=c(52918),D=c(11459),E=c(69759),F=c(93525),G=c(68470),H=c(49784),I=c(76270),J=c(30963),K=c(7629),L=c(22118),M=c(57659),N=function(a,b){var c=b.type,d=b.payload;return"update"===c?(0,f.Z)({},a,d):a},O={saveCart:!1,storeName:"",destStoreId:"",numItems:0};(e=d||(d={})).ADD="add",e.DELETE="delete";var P=c(89888),Q=function(){var a=(0,p.WF)(),b=a.storeId,c=a.maxItems,d=a.businessId,e=l.useContext(P.Zz);return{storeId:b,MAX_CART_ITEM_NUMBER:void 0===c?15:c,hasMaxItemsReached:!1,requestDispatchTracker:e,businessId:d}},R=c(11737),S=c(85464),T=c(68760),U=c(90328),V=c(4662),W=c(54307),X=c(87940),Y=c(61405),Z=c(34788),$=c(23685),_=c(83379),aa=c(95513),ab=c(85809),ac=l.memo(function(a){var b,c,e,j,k,m=a.uiViewContainer,o=a.position,r=a.searchKey,s=a.trackingParams,u=a.trackCallback,v=a.retailItem,x=a.adsData,P=a.maxQuantity,W=a.onError,_=a.onCompleted,aa=v.id,ac=v.purchaseType,ad=v.displayUnit,ae=l.useContext(E.J).renderLoyaltySignupModal,af=(0,p.WF)(),ag=af.loyaltyCode,ah=af.orderCart,ai=l.useContext(B.M),aj=ai.isFirstVisit,ak=ai.renderAwarenessModal,al=ai.isPersistentCartEnabled,am=a.cartQuantity,an=void 0===am?L.BZ:am,ao=a.orderCartId,ap=a.cartItemId,aq=a.cartContinuousQuantity,ar=void 0===aq?L.BZ:aq,as=(0,q.r)(m).page,at=ac===D.Oz.PURCHASE_TYPE_MEASUREMENT?ar:an,au=Q(),av=au.storeId,aw=au.requestDispatchTracker,ax=au.businessId,ay=(0,T.a)({storeId:av,orderCart:null!=ah?ah:null,isPickupSelected:!1,shouldSetPickup:!1,shouldSetDelivery:!0}),az=!al&&(0,C.oR)(ah,av),aA=(0,K.wt)(ah),aB=aA.numItemsInCart,aC=aA.orderCartStoreId,aD=aA.orderCartStoreName,aE=(0,h.Z)(l.useState(d.ADD),2),aF=aE[0],aG=aE[1],aH=(0,h.Z)(l.useReducer(N,O),2),aI=aH[0],aJ=aH[1],aK=function(a){aJ({type:"update",payload:a})},aL=aI.saveCart,aM=aI.storeName,aN=aI.destStoreId,aO=aI.numItems,aP=(0,C.K9)().displayToast,aQ=function(){aM&&aP((0,f.Z)({duration:z.VW.Durations.Medium,isError:!1,text:$.ZP.t("convenience_savedCart_saveGrocery",{storeName:aM})},aj&&{action:{text:$.ZP.t("stores_learnMore"),onClick:ak}}))},aR=function(a){aQ();var b={storeId:null!=av?av:"",businessId:null!=ax?ax:"",sourceCartId:aV,numItems:aO,destStoreId:aN};a===G.V2.Success?G.EY.logSaveCartSave(b):G.EY.logSaveCartError(b),aK({saveCart:!1,numItems:aB,destStoreId:aC,storeName:aD})},aS=(0,F.IE)(ah,av),aT=aS.parentStoreId,aU=aS.isValidBundleContext,aV=(0,U.ve)({currentOrderCartId:void 0===ao?"":ao,currentCartStoreId:aC,currentCartItemId:ap,itemStoreId:av,isBundle:aU}),aW=(0,U.Jt)(aV),aX=(0,X.U)(),aY=(0,Y.M)(),aZ=l.useContext(Z.Z).consumer,a$=function(a){var b,c,e,h,i,j,k,l,n,p=a===G.V2.Success&&aF===d.ADD;if(_&&_(p),aL){aR(a);return}var q=(0,J.lf)(null!==(e=null==v?void 0:v.priceList)&&void 0!==e?e:[]),t=(0,J.lk)(null!==(h=null==v?void 0:v.priceList)&&void 0!==h?h:[],!!q),u=(0,J.DS)(null!==(i=null==v?void 0:v.priceList)&&void 0!==i?i:[],!!q),w=aZ.id===(null==ah?void 0:null===(b=ah.creator)||void 0===b?void 0:b.id);(0,H.w)((0,g.Z)((0,f.Z)({quantity:an,storeId:av,productId:aa,itemMsid:null!==(j=v.itemMsid)&&void 0!==j?j:"",orderCartId:aV,uiViewContainer:m,page:as,position:o,searchTerm:r,actionState:a,businessId:ax,trackingParams:(0,g.Z)((0,f.Z)({},s),{o1_store_id:aU?aT:void 0,o2_store_id:aU?av:void 0})},x),{price:null!==(k=null==t?void 0:t.price.unitAmount)&&void 0!==k?k:(null==v?void 0:null===(c=v.price)||void 0===c?void 0:c.unitAmount)||0,nonDiscountPrice:null==q?void 0:q.price.unitAmount,memberPrice:null==u?void 0:u.price.unitAmount,isLoyaltyMember:!!ag,productName:null!==(l=v.name)&&void 0!==l?l:"",productDescription:null!==(n=v.description)&&void 0!==n?n:"",productBadges:Array.isArray(v.badges)&&v.badges.length>0?(0,I.C)(v.badges):void 0,isParticipant:(null==ah?void 0:ah.groupCart)?!w:void 0}))},a_=(0,h.Z)((0,R.Z)([],{onCompleted:function(){a$(G.V2.Success)},onError:function(){a$(G.V2.Failure)},refetchQueries:aV?[]:al?aW:[{query:S.IO}],awaitRefetchQueries:!0}),2),a0=a_[0],a1=a_[1].error,a2=(0,h.Z)((0,V.Z)(ah||{orders:[]},(null==ah?void 0:null===(b=ah.orders)||void 0===b?void 0:null===(c=b[0])||void 0===c?void 0:c.id)||"",ap||"",!1),1)[0];l.useEffect(function(){a1&&W&&(W(!0),setTimeout(function(){W(!1)},3e3))},[a1,W]);var a3,a4=l.useCallback((k=(0,w.Z)(y().mark(function a(b,c,d,e,f){var g,h,i,j,k;return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b!==d){a.next=2;break}return a.abrupt("return");case 2:if(0!==b){a.next=5;break}return a2(),a.abrupt("return");case 5:return f&&aK({saveCart:!0,numItems:aB,destStoreId:aC,storeName:aD}),aw.enQueue&&aw.enQueue(aa,b),(null==ah?void 0:ah.orders)&&e&&(g=(0,ab.tH)(ah.orders,e)),h=(0,K.aZ)({storeId:av,product:v,orderCartId:c,quantity:b,orderCart:ah,shouldSaveCart:f,cartItemId:e,isAdsItem:!!(null==x?void 0:x.campaign_id),isBundle:aU,specialInstructions:null!=g?g:""}),i=null==aZ?void 0:aZ.orderCart,a.next=13,a0({variables:{updateCartItemApiParams:h,fulfillmentContext:ay,returnCartFromOrderService:!0}});case 13:(j=a.sent.data)&&(""===h.cartId&&aX(av,null===(k=j.updateCartItemV2)||void 0===k?void 0:k.id),h.cartId!==(null==i?void 0:i.id)&&aY(i));case 15:case"end":return a.stop()}},a)})),function(a,b,c,d,e){return k.apply(this,arguments)}),[null==x?void 0:x.campaign_id,null==aZ?void 0:aZ.orderCart,ay,aa,aU,aB,ah,aC,aD,a2,aw,v,av,aX,aY,a0,]),a5=l.useContext(t.a),a6=a5.noAddressProvided,a7=a5.updateAddressModalState,a8=(0,n.Z)(),a9=a8&&a6,ba=l.useCallback(function(){aG(d.ADD),null==u||u({stepper_event_type:d.ADD}),ae(v.storeId)},[ae,v.storeId,u]),bb=l.useCallback(function(){aG(d.DELETE),null==u||u({stepper_event_type:d.DELETE})},[u]),bc=l.useCallback((a3=(0,w.Z)(y().mark(function a(b){return y().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!a9){a.next=2;break}return a.abrupt("return",a7());case 2:return a.next=4,a4(b,aV,at,ap,!!az);case 4:case"end":return a.stop()}},a)})),function(a){return a3.apply(this,arguments)}),[ap,aV,at,a4,az,a9,a7,]);return(0,i.jsx)(M.w,{"data-testid":"RetailStepperContainerStepperComponent",children:(0,i.jsx)(A.I,{quantity:an,continuousQuantity:ar,purchaseType:ac,displayUnit:null!=ad?ad:"",incrementInfo:null!==(j=null===(e=v.metadata)||void 0===e?void 0:e.increment)&&void 0!==j?j:{},shouldExpandLeft:!0,maxQuantity:null!=P?P:L.fq,onIncrement:ba,onDecrement:bb,onUpdate:bc})})}),ad=function(a){var b=a.retailItem,c=a.trackCallback,d=a.openProductModal,e=b.id,h=b.quickAddContext,j=b.variantInfo,k=(0,aa.S)(),l=(0,W.Dq)(e),m=l.itemDetails,n=l.orderCartId,o=m||{},p=o.quantity,q=o.continuousQuantity,r=o.id;return j||k&&(null==h?void 0:h.isEligible)===!1?(0,i.jsx)(_.h,{retailItem:b,trackCallback:c,onClick:d}):(0,i.jsx)(ac,(0,g.Z)((0,f.Z)({},a),{cartQuantity:null!=p?p:L.BZ,cartContinuousQuantity:null!=q?q:L.BZ,orderCartId:n,cartItemId:r}))},ae=function(a){var b,c=(null==a?void 0:a.variantTypeInfo)||[];return 1===c.length&&(null===(b=c[0])||void 0===b?void 0:b.variantType)===D.Jy.VARIANT_TYPE_SIZE},af=c(68885),ag=c(22501),ah=c(1402),ai=c(92281),aj=function(a){var b,c=a.product,d="",e=c.soldAsInfoTextList,f=null===(b=null==e?void 0:e.find(function(a){return a&&(0,J.Pm)(a.priceType)}))||void 0===b?void 0:b.soldAsInfoShortText;if(""===(d=f?"(".concat(f,")"):"")){var g=c.soldAsInfoShortText;d=g?"(".concat(g,")"):""}return""===d?null:(0,i.jsx)(ai.HE,{size:k.Text.Sizes.S14,color:k.Text.Colors.TextSecondary,children:d})},ak=c(99699),al=c(60151),am=c(70573),an=c(47715),ao=c(50091),ap=c(10739),aq=function(a){var b=[],c=[],d=[];return a?(a.forEach(function(a){a.placement===ap.mf.TITLE&&b.push(a),a.placement===ap.mf.FLEXIBLE_ITEM_DESCRIPTOR&&d.push(a),a.placement===ap.mf.FLEXIBLE_ITEM_PRICE&&a.type===ao.g.OFFER&&c.push(a)}),{titleBadges:b,flexibleItemDescriptorBadges:d,flexibleItemPriceBadges:c}):{titleBadges:b,flexibleItemPriceBadges:c,flexibleItemDescriptorBadges:d}},ar=c(99171),as=c(51545),at=c(94533),au=function(a){var b=a.retailItem,c=a.imageSize,d=void 0===c?af.Si.Medium:c,e=a.uiViewContainer,w=a.position,x=a.searchKey,y=a.trackingParams,z=a.storeUrlSlug,A=a.onModalClose,B=a.onStepperCompleted,C=(0,h.Z)(l.useState(!1),2),D=C[0],E=C[1],F=(0,h.Z)(l.useState(!1),2),G=F[0],H=F[1],I=(0,h.Z)(l.useState(!1),2),J=I[0],K=I[1],L=l.useContext(ar.O).isPersistentCartEnabled,M=(0,p.WF)(),N=M.loyaltyCode,O=M.businessId,P=M.isGroupCart,Q=M.isCartOwner,R=l.useContext(as.Z).containerType,S=b.id,T=b.name,U=b.itemMsid,V=b.imageUrl,W=b.menuId,X=b.calloutDisplayString,Y=b.badges,Z=b.adsMetadata,_=b.displayUnit,aa=b.priceList,ab=b.variantInfo,ac=b.quickAddContext,ao=aq(Y),ap=ao.titleBadges,au=ao.flexibleItemPriceBadges,av=ao.flexibleItemDescriptorBadges,aw=function(){a.onClick?a.onClick(S):E(!0),a.onModalOpen&&a.onModalOpen(b)},ax=function(a){A&&A(a),E(!1)},ay=function(a){K(!!a)},az=(0,m.YD)({threshold:0,rootMargin:"1000px 0px",skip:G}),aA=az.ref,aB=az.inView;l.useEffect(function(){aB&&H(aB)},[aB]);var aC,aD=(0,q.r)(a.uiViewContainer).page,aE={badges:(null==Y?void 0:Y.length)?(0,ak.yR)(Y):"",campaign_id:null==Z?void 0:Z.campaignId,ad_group_id:null==Z?void 0:Z.adGroupId,auction_id:null==Z?void 0:Z.auctionId,complex_deal_campaign_id:null==Z?void 0:Z.complexDealCampaignId},aF={loyaltyCode:N,uiViewContainer:e,product:b,productIndex:w,storeId:z,extendedTrackingDetails:y,page:aD,isParticipant:P?!Q:void 0},aG=(0,am.useDVSBoolean)(an.PR.enableSendBeacon,!1),aH=(0,ak.Q5)(aF,aG),aI=l.useContext(t.a),aJ=aI.noAddressProvided,aK=aI.updateAddressModalState,aL=(0,n.Z)();return(0,i.jsxs)(ak.ZP,(0,g.Z)((0,f.Z)({},aF),{children:[(0,i.jsxs)(ai.EZ,{onClick:function(){if(aH(),aL&&aJ)return aK();aw()},size:d,shouldHaveTransitionDelay:!L,isVirtualGrid:R===as.C.Grid,ref:aA,"data-anchor-id":r.D.Convenience.item,"data-testid":r.D.Convenience.item,"data-item-id":S,children:[G&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ai.KV,{children:[(0,i.jsx)(ai.OC,{size:d,children:(0,i.jsx)(ah.u,{stopEventPropagation:!0,debugData:{itemId:S,menuId:W,itemMsid:{id:U,externalLink:"".concat(ah.y,"?searchtext=").concat(U,"&bizid=").concat(O)}},children:(0,i.jsx)(ai.mo,{size:d,children:(0,i.jsx)(o.Z,{url:V,aspectRatio:"1:1",altText:T,imageHeight:d,cssAllMediaWidth:d})})})}),(0,i.jsx)(ad,{openProductModal:aw,retailItem:b,size:d,onError:ay,uiViewContainer:e,position:w,searchKey:x,trackingParams:y,trackCallback:aH,adsData:aE,onCompleted:B})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(u.e,{priceList:aa,displayUnit:null!=_?_:"",textSize:u.T.Small,product:b,isProductListItem:!0,loyaltyCode:null!=N?N:""}),!N&&(0,i.jsx)(ag.f,{priceList:aa,textSize:k.Text.Sizes.S12,lineHeight:k.Spacing.Small}),au.map(function(a){return(0,i.jsx)(ai.c2,{children:(0,i.jsx)(j.default,{text:(null==a?void 0:a.text)||"",type:(null==a?void 0:a.styleType)?a.styleType:void 0},"".concat(null==a?void 0:a.type,":").concat(null==a?void 0:a.text))},a.text)}),(0,i.jsxs)(ai.QX,{weight:k.Text.Weights.Medium,size:k.Text.Sizes.S14,title:T,"data-telemetry-id":al.p.convenienceItemDescription,children:[ap.map(function(a){return(0,i.jsx)(ai.c2,{children:(0,i.jsx)(j.default,{text:(null==a?void 0:a.text)||"",type:(null==a?void 0:a.styleType)?a.styleType:void 0},"".concat(null==a?void 0:a.type,":").concat(null==a?void 0:a.text))},a.text)}),T]}),(0,i.jsx)(aj,{product:b}),X&&(0,i.jsx)(k.Text,{color:k.Text.Colors.TextHighlight,styles:k.Text.Styles.Body2,children:X}),(0,i.jsx)(s.Z,{orientation:"vertical",badges:av})]}),!!ab&&(0,i.jsx)(ai.$5,{color:k.Text.Colors.TextTertiary,styles:k.Text.Styles.Caption2,children:ae(aC=ab)?$.ZP.t("convenience_productVariants_moreSizes_label"):$.ZP.t("convenience_productVariants_moreOptions_label")})]}),!G&&(0,i.jsx)(ai.Z6,{size:d}),J&&(0,i.jsxs)(ai.jj,{children:[(0,i.jsx)(k.Icon,{type:k.Icon.Types.ErrorFill,color:k.Icon.Colors.TextAction}),(0,i.jsx)(ai.y,{children:$.ZP.t("convenience_savedCart_generalCartError")})]})]}),D&&(0,i.jsx)(v.ProductModal,{onClose:ax,productId:S,uiViewContainer:e,position:w,searchQuery:x,trackingParams:y,adsData:aE,loyaltyCode:null!=N?N:"",storeUrlSlug:z,quickAddContext:(0,at.K)(ac)?ac:void 0})]}))};au.defaultProps={imageSize:af.Si.Medium}},89060:function(a,b,c){c.d(b,{L:function(){return j}});var d=c(85893),e=c(95899),f=c(67294),g=c(58197),h=c(59810),i=c(69797),j=function(a){var b,c,j=a.onClick,k=a.legoSectionBodyList,l=a.displaySeparator,m=a.refetchQueries,n=a.shouldSuppressSeeAll,o=a.setAddProductSuccess,p=a.orderCartOverride,q=a.campaignId,r=null!==(c=(0,i.M)({legoSectionBodyList:null!=k?k:[],shouldSuppressSeeAll:void 0===n||n}))&&void 0!==c?c:[],s=f.useCallback(function(a){j(a)},[j]),t=f.useCallback(function(a){o&&o(a)},[o]);return(null==r?void 0:null===(b=r.body)||void 0===b?void 0:b.length)?(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)(e.default,{type:e.default.Types.FullBorder,verticalMargin:e.default.Sizes.Small}),(0,d.jsx)(h.O.Provider,{value:{onProductClick:s,shouldSuppressDefaultClick:!0,refetchQueries:m,onHandleAddProduct:t,orderCart:null!=p?p:null,shoppingListCampaignId:q},children:(0,d.jsx)(g.H,{facetFeedResponse:r})})]}):null}},11715:function(a,b,c){c.d(b,{q:function(){return g}});var d=c(85893);c(67294);var e=c(10071),f=c(23685),g=function(a){var b,c=a.itemDetails,g=null==c?void 0:null===(b=c.nutritionalInfo)||void 0===b?void 0:b.disclaimer;return g?(0,d.jsxs)("div",{children:[(0,d.jsx)(e.Text,{color:e.Text.Colors.TextTertiary,styles:e.Text.Styles.Body1Emphasis,children:f.ZP.t("convenience_productModal_disclaimer")}),(0,d.jsx)(e.Text,{color:e.Text.Colors.TextTertiary,styles:e.Text.Styles.Body2,overflow:e.Text.Overflows.Wrap,children:g})]}):null}},70873:function(a,b,c){c.r(b),c.d(b,{ProductImageCarousel:function(){return G}});var d=c(26042),e=c(69396),f=c(99534),g=c(10253),h=c(7297),i=c(85893),j=c(67294),k=c(17398),l=c(11766),m=c(10071),n=c(50579),o=c(68470),p=c(87379),q=c(40782),r=c(85399);function s(){var a=(0,h.Z)(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n\n  // Touch action is reserved for panning when zoomed\n  touch-action: none;\n"]);return s=function(){return a},a}function t(){var a=(0,h.Z)(["\n  touch-action: none;\n  cursor: crosshair;\n  max-width: 100%;\n  object-fit: contain;\n\n  opacity: ",";\n  ",";\n"]);return t=function(){return a},a}function u(){var a=(0,h.Z)(["\n  pointer-events: none;\n  width: 100%;\n  object-fit: contain;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: ",";\n  ",";\n"]);return u=function(){return a},a}function v(){var a=(0,h.Z)(["\n  position: absolute;\n  bottom: ","px;\n  right: ","px;\n  border-radius: ","px;\n  background-color: ",";\n  box-shadow: ",";\n\n  ",";\n"]);return v=function(){return a},a}var w=function(a){var b=a.imgSrc,c=a.imgAlt,g=a.scaleFactor,h=(0,f.Z)(a,["imgSrc","imgAlt","scaleFactor"]),k=(0,j.useRef)(null),l=(0,j.useState)(!1),n=l[0],o=l[1],p=(0,j.useState)(!1),q=p[0],s=p[1],t=(0,j.useState)({left:0,top:0}),u=t[0],v=t[1],w=(0,j.useCallback)(function(a){if(k.current){var b=k.current.getBoundingClientRect(),c=Math.max(Math.min(a.clientX-b.left,b.width),0),d=Math.max(Math.min(a.clientY-b.top,b.height),0);v({left:-c*g+b.width*g/2,top:-d*g+b.height*g/2})}},[g]),y=function(){o(!0)},C=function(){o(!1)},D=function(a){w(a)},E=(0,r.Z)(D,9).callback,F=function(){o(!0),s(!0)},G=function(a){w(a.touches[0])},H=(0,r.Z)(G,9).callback,I=function(){o(!1)};return(0,j.useEffect)(function(){n||s(!1)},[n]),(0,i.jsxs)(x,(0,e.Z)((0,d.Z)({},h),{children:[(0,i.jsx)(z,{ref:k,onMouseEnter:y,onMouseLeave:C,onMouseMove:E,onTouchStart:F,onTouchMove:H,src:b,alt:c,opacity:n?0:1}),(0,i.jsx)(A,{src:b,opacity:n?1:0,style:{transform:"\n          translate(\n            ".concat(u.left,"px, ").concat(u.top,"px\n          )\n          scale(").concat(g,")\n          ")}}),(0,i.jsx)(B,{isVisible:q,onClick:I,children:(0,i.jsx)(m.Icon,{type:m.Icon.Types.ZoomOutLine})})]}))},x=p.default.div.withConfig({componentId:"sc-aab6cb42-0"})(s()),y=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return"transition: opacity ".concat(a,"ms ease-in")},z=p.default.img.withConfig({componentId:"sc-aab6cb42-1"})(t(),function(a){return a.opacity},y()),A=p.default.img.withConfig({componentId:"sc-aab6cb42-2"})(u(),function(a){return a.opacity},function(a){return 1===a.opacity?"\n      ".concat(y(),"\n  "):"\n      ".concat(y(0),"\n  ")}),B=(0,p.default)(q.Z).withConfig({componentId:"sc-aab6cb42-3"})(v(),m.Spacing.XxxSmall,m.Spacing.XxxSmall,m.BorderRadius.Small,m.Colors.SystemWhite,m.Shadows.Small,function(a){return a.isVisible?"\n    opacity: 1;\n    ".concat(y(600),"\n  "):"\n    pointer-events: none;\n    touch-action: none;\n    opacity: 0;\n    ".concat(y(),"\n  ")}),C=c(47715),D=c(2150),E=["control","in-house"];function F(){var a=(0,h.Z)(["\n  position: relative;\n  width: ",";\n  height: auto;\n  margin: 0 auto;\n  min-height: ","px;\n"]);return F=function(){return a},a}var G=function(a){var b=a.displayProduct,c=a.shouldCapMaxWidth,h=a.isInHouseVariant,p=a.zoomFactor,q=void 0===p?1.6:p,r=(0,f.Z)(a,["displayProduct","shouldCapMaxWidth","isInHouseVariant","zoomFactor"]),s=b.imageUrlsList,t=b.imageUrl,u=(0,j.useMemo)(function(){return s&&s.length>0?s.filter(function(a){return"string"==typeof a}):t?[t]:[]},[t,s]),v=(0,g.Z)(j.useState(0),2),x=v[0],y=v[1],z=u.length>0,A=function(a){o.EY.logImageCarouselView(a)};j.useEffect(function(){A({photoId:u[0],photoPosition:0,itemId:b.id})},[]);var B=(0,D.D)(C.PR.nvImageCarouselVariant,E,"control");return(0,i.jsx)(H,(0,e.Z)((0,d.Z)({shouldCapMaxWidth:void 0!==c&&c},r),{children:z?(0,i.jsxs)(m.StackChildren,{size:m.StackChildren.Sizes.Large,children:[u.map(function(a,c){return c!==x?null:"control"!==B||h?(0,i.jsx)(w,{imgSrc:a,imgAlt:b.name,scaleFactor:q},a):(0,i.jsx)(k.Z,{enlargedImagePosition:"over",smallImage:{alt:b.name,isFluidWidth:!0,src:a},largeImage:{alt:"",src:a,width:1200,height:900}},a)}),u.length>1&&(0,i.jsx)(n.xm,{children:u.map(function(a,c){return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.at,{src:a,width:75,alt:"",onClick:function(){y(c),A({itemId:b.id,photoId:a,photoPosition:c})}}),c===x&&(0,i.jsx)(n.py,{})]},c)})})]}):(0,i.jsx)(l.Z,{url:b.imageUrl,aspectRatio:"1:1",altText:b.name,imageHeight:"".concat(n.WQ,"px"),cssAllMediaWidth:"".concat(n.WQ,"px")})}))},H=p.default.div.withConfig({componentId:"sc-72125ebb-0"})(F(),function(a){return a.shouldCapMaxWidth?"".concat(700,"px"):"auto"},n.WQ)},94546:function(a,b,c){c.r(b),c.d(b,{DEFAULT_MAX_QUANTITY:function(){return R},ProductModal:function(){return S},default:function(){return T}});var d=c(26042),e=c(69396),f=c(10253),g=c(85893),h=c(67294),i=c(11351),j=c(29815),k=c(1968),l=c(10071),m=c(44556),n=c(7975),o=c(94421),p=c(846),q=c(68470),r=c(30963),s=c(86770),t=c(49060),u=c(89060),v=c(11715),w=c(70873),x=c(46223),y=c(24837),z=c(62756),A=c(97139),B=c(95899),C=c(33085),D=c(23685),E=c(79434),F=function(a){var b=a.storeId,c=a.similarProducts,d=a.onClick;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B.default,{type:B.default.Types.Separator,verticalMargin:B.default.Sizes.Small}),(0,g.jsx)(l.Inset,{children:(0,g.jsx)(l.Text,{styles:l.Text.Styles.Bold24,children:D.ZP.t("convenience_productModal_similarItemsHeading")})}),(0,g.jsx)(C.Z,{isSinglePage:!1,children:(0,g.jsx)(l.Inset,{children:(0,g.jsx)(l.InlineChildren,{"data-anchor-id":p.D.ProductModal.SimilarProducts,children:c.slice(0,10).map(function(a){return(0,g.jsx)(E.A,{onClick:d,storeUrlSlug:b,retailItem:a,imageSize:E.S.Medium,uiViewContainer:q.gH.SIMILAR_ITEMS},a.id)})})})})]})},G=c(34520),H=c(54307),I=c(66087),J=c(50310),K=c(24874),L=function(a){var b,c,e,i,B,C=a.onClose,D=a.uiViewContainer,E=a.position,L=a.searchQuery,M=a.trackingParams,N=a.adsData,O=a.storeId,P=void 0===O?"":O,Q=a.businessId,R=void 0===Q?"":Q,S=a.maxItems,T=a.displayStoreInfo,U=a.shouldAddAsBundledItem,V=void 0!==U&&U,W=a.menuQueryResult,X=a.refetchQueries,Y=void 0===X?[]:X,Z=a.loyaltyCode,$=a.attrSrc,_=a.productId,aa=a.productQuery,ab=a.productQueryError,ac=a.productQueryLoading,ad=a.setProductId,ae=a.storeQuery,af=a.orderCartOverride,ag=(0,o.t)(),ah=ag.isDesktop,ai=ag.isTablet,aj=ag.isMobile,ak=(0,H.Sq)(),al=null!=af?af:ak,am=(0,f.Z)(h.useState(""),2),an=am[0],ao=am[1],ap=(0,f.Z)(h.useState(!1),2),aq=ap[0],ar=ap[1],as=(0,f.Z)(h.useState(!1),2),at=as[0],au=as[1],av=(0,f.Z)(h.useState(),2),aw=av[0],ax=av[1],ay=null!==(B=null!=Z?Z:null==ae?void 0:null===(b=ae.retailStorePageFeedLite)||void 0===b?void 0:b.loyaltyCode)&&void 0!==B?B:"";h.useEffect(function(){q.EY.logProductView((0,d.Z)({storeId:P,productId:_},M)),ax(void 0),ao("")},[P,_,M]);var az=[],aA={},aB={};ac||ab||(az=(null==aa?void 0:aa.retailItemDetails)?[null==aa?void 0:aa.retailItemDetails,].concat((0,j.Z)(null==aa?void 0:aa.retailItemDetails.productVariants)):[],aA=null==aa?void 0:aa.retailItemDetails,aB=void 0===aw?null==aa?void 0:aa.retailItemDetails:aw);var aC=ab||!aB,aD=aB.nutritionalInfo,aE=function(){C(aq)},aF=function(){C(!0)},aG=(0,K.Q)(R,null==aa?void 0:null===(c=aa.retailItemDetails)||void 0===c?void 0:c.itemMsid).isBanana,aH=h.useCallback(function(a,b){ax(b),ao(JSON.stringify(a))},[]),aI=function(a){a.productId&&(q.EY.logProductCrossSellClicks({storeId:P,originProductId:_,productId:a.productId,uiViewContainer:q.gH.PRODUCT_DETAILS}),ad(a.productId))};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(k.Modal,{"data-anchor-id":p.D.ProductModal.Id,"data-item-id":aB?aB.id:"",isFooterFixedPosition:!0,size:aC?k.Modal.Sizes.Large:k.Modal.Sizes.XxLarge,title:"",renderContentHeader:function(){return(0,g.jsx)(g.Fragment,{})},shouldRenderStickyHeader:!0,isFullScreenOnMobile:!0,renderFooterContent:at&&aj?void 0:function(){if(aC)return(0,g.jsx)(x.b,{onClose:aE});var a,b,c,d=(null==aB?void 0:aB.priceList)?null===(a=(0,r.td)(null==aB?void 0:aB.priceList))||void 0===a?void 0:null===(b=a.price)||void 0===b?void 0:b.unitAmount:null==aB?void 0:null===(c=aB.price)||void 0===c?void 0:c.unitAmount;return(0,g.jsx)(y.$,{itemId:aw?aw.id:_,unitAmount:d,orderCart:al,storeId:P,onAddItemSuccess:aF,uiViewContainer:D,position:E,searchQuery:L,product:aB,trackingParams:M,adsData:N,maxItems:S,businessId:R,loyaltyCode:ay,shouldAddAsBundledItem:V,refetchQueries:Y,attrSrc:$,specialInstructions:an,handleRipenessPreference:aH})},onClose:aE,children:[ac&&(0,g.jsx)(s.a,{}),aC&&(0,g.jsx)(x.j,{}),!ac&&!ab&&aB&&(0,g.jsxs)(m.K.Provider,{value:W||m.O,children:[(0,g.jsx)(l.Inset,{children:(0,g.jsxs)(l.StackChildren,{children:[(0,g.jsx)(w.ProductImageCarousel,{displayProduct:(0,d.Z)({},aB),shouldCapMaxWidth:ah||ai}),(0,g.jsx)(I.Z,{loyaltyCode:ay,displayProduct:aB,rootProduct:aA,displayStoreInfo:void 0!==T&&T,setShowTermsAndConditionsModal:au,isBanana:aG}),(0,g.jsx)(n.O,{products:az,onSelectionChanged:function(a){q.EY.logProductVariantClicks({storeId:P,rootProductId:aA.id,variantProductId:a.id,uiViewContainer:"product-details-modal"}),ax(a)}}),aG&&(0,g.jsx)(J.Z,{retailItem:null==aa?void 0:aa.retailItemDetails,businessId:R,handleRipenessPreference:aH,specialInstructions:an}),(0,g.jsx)(u.L,{legoSectionBodyList:null==aA?void 0:aA.legoSectionBodyList,displaySeparator:!0,onClick:aI,refetchQueries:Y,setAddProductSuccess:ar,campaignId:null==M?void 0:M.component_id}),(0,g.jsx)(t.f,{productId:aB.id,itemMsid:aB.itemMsid||"",productDescription:aB.description,productDetails:aB.details||""}),(0,g.jsx)(z.N,{itemDetails:aB}),(0,g.jsx)(v.q,{itemDetails:aB}),aD&&(0,g.jsx)(A.r,{nutritionalInfo:aD})]})}),(null==aA?void 0:null===(e=aA.similarProducts)||void 0===e?void 0:e.length)>0?(0,g.jsx)(F,{storeId:P,similarProducts:null==aA?void 0:aA.similarProducts,onClick:function(a){ad(a)}}):null]})]}),at&&(0,g.jsx)(G.d,{handleClose:function(){return au(!1)},termsAndConditions:null===(i=aA.availablePromotion)||void 0===i?void 0:i.termsAndConditions})]})})},M=c(20474),N=c(94533),O=c(35180),P=c(95513),Q=h.lazy(function(){return Promise.all([c.e(97073),c.e(48764),c.e(33016),c.e(48837),c.e(90975),c.e(81865),c.e(32558),c.e(88241),c.e(67618),c.e(5354),c.e(48172),c.e(87188),c.e(41264),c.e(27811),c.e(37443),c.e(4835),c.e(50791),c.e(52892),c.e(32271),c.e(93357),c.e(99722)]).then(c.bind(c,69241))}),R=15,S=function(a){var b,c,j,k,l,m,n=a.productId,o=a.onClose,p=a.quickAddContext,q=a.storeUrlSlug,r=a.retailItemHasModifiers,s=a.storeId,t=(0,i.WF)(),u=(0,f.Z)(h.useState(n),2),v=u[0],w=u[1],x=(0,P.S)(),y=(0,O.K)({storeUrlSlug:q}),z=s||q||(null===(b=y.data)||void 0===b?void 0:null===(c=b.retailStorePageFeedLite)||void 0===c?void 0:c.id),A=(0,M.k)({storeId:z,productId:v,withItemOptions:x}),B=A.data,C=A.error,D=A.loading,E=x&&r||Boolean(null==B?void 0:null===(j=B.retailItemDetails)||void 0===j?void 0:null===(k=j.optionList)||void 0===k?void 0:k.length);if((null==p?void 0:p.isEligible)===!1||E)return B&&!D?(0,g.jsx)(Q,{storeId:z,itemId:v,setItemId:w,storeName:(null===(l=y.data)||void 0===l?void 0:null===(m=l.retailStorePageFeedLite)||void 0===m?void 0:m.name)||"",menuId:"",closeModal:o,showModal:!0,isViewingPickup:!1,shouldUseCacheFirst:!0,isRetailItem:!0,product:(0,N.K)(null==B?void 0:B.retailItemDetails)?null==B?void 0:B.retailItemDetails:void 0}):null;var F=(0,e.Z)((0,d.Z)({},a,t),{productQuery:B,productQueryError:C,productQueryLoading:D,setProductId:w,productId:v,storeQuery:null==y?void 0:y.data,storeId:z});return(0,g.jsx)(L,(0,d.Z)({},F))},T=S},46223:function(a,b,c){c.d(b,{b:function(){return j},j:function(){return i}});var d=c(85893);c(67294);var e=c(50579),f=c(10071),g=c(24906),h=c(23685),i=function(){return(0,d.jsxs)(e.xq,{children:[(0,d.jsx)("img",{alt:"error-background",src:"https://cdn.doordash.com/convenience/images/modal-error.svg"}),(0,d.jsxs)(e.sP,{children:[(0,d.jsx)(f.Text,{styles:f.Text.Styles.Bold40,children:h.ZP.t("convenience_productModal_error_header")}),(0,d.jsx)(f.Theming,{overrides:{Colors:{TextPrimary:"TextSecondary"}},children:(0,d.jsx)(f.Text,{styles:f.Text.Styles.Medium24,children:h.ZP.t("convenience_productModal_error_message")})})]})]})},j=function(a){var b=a.onClose;return(0,d.jsx)(f.InlineChildren,{justifyContent:f.InlineChildren.Justification.FlexEnd,children:(0,d.jsx)(g.default,{onClick:b,type:g.default.Types.TertiaryPill,children:h.ZP.t("convenience_productModal_cancel")})})}},62756:function(a,b,c){c.d(b,{N:function(){return n}});var d=c(85893),e=c(67294),f=c(10071),g=c(50579),h=function(a){var b=a.nutrient,c=a.isSubCategory,e=void 0!==c&&c,h=a.shouldHideNutritionalHeaders;if(!b)return null;var i=b.label,j=b.pctDailyValue,k=b.total;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(g.SC,{children:[(0,d.jsx)(g.Dw,{textAlign:"left",children:(0,d.jsx)(g.ay,{isSubCategory:e,styles:e?f.Text.Styles.Body1:f.Text.Styles.Body1Emphasis,children:i})}),(0,d.jsx)(g.Dw,{textAlign:"right",children:(0,d.jsx)(g.MH,{styles:f.Text.Styles.Body1,children:k})}),!(void 0!==h&&h)&&(0,d.jsx)(g.Dw,{textAlign:"right",children:(0,d.jsx)(g.MH,{styles:f.Text.Styles.Body1,children:j})})]})})},i=c(23685),j=function(a){var b=a.nutrients,c=a.shouldHideNutritionalHeaders,j=void 0!==c&&c;return b?(0,d.jsxs)(g.iA,{children:[!j&&(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{}),(0,d.jsx)(g.bY,{textAlign:"right",children:(0,d.jsx)(g.MH,{styles:f.Text.Styles.Caption1,children:i.ZP.t("convenience_productModal_amount_per_serving")})}),(0,d.jsx)(g.bY,{textAlign:"right",children:(0,d.jsx)(g.MH,{styles:f.Text.Styles.Caption1,children:i.ZP.t("convenience_productModal_daily_value")})})]})}),b.map(function(a){var b;return a?(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)(h,{nutrient:a,shouldHideNutritionalHeaders:j}),null===(b=a.subCategories)||void 0===b?void 0:b.map(function(a){return a?(0,d.jsx)(h,{nutrient:a,shouldHideNutritionalHeaders:j,isSubCategory:!0}):null})]},a.label):null})]}):null},k=c(95899),l=c(3694),m=c(68470),n=function(a){var b=a.itemDetails,c=function(){return b},e=function(){return null==b?void 0:b.nutritionalInfo};if(!e())return null;var h=function(){return Boolean(null==b?void 0:b.shouldHideNutritionalHeaders)},n=e()||{},o=n.servingSize,p=void 0===o?"":o,q=n.servingsPerContainer,r=void 0===q?"":q,s=n.nutrients,t=void 0===s?[]:s,u=n.nutritionAnnotation,v=void 0===u?"":u,w=function(){return!!p&&""!==p.trim()},x=function(){return!!r&&""!==r.trim()};return w()||x()||t&&(null==t?void 0:t.length)!==0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(k.default,{type:k.default.Types.FullBorder,verticalMargin:k.default.Sizes.Small}),(0,d.jsxs)("div",{children:[(0,d.jsx)(g.M$,{children:(0,d.jsx)(f.Text,{styles:f.Text.Styles.Label1Emphasis,children:i.ZP.t("convenience_productModal_nutrition_facts")})}),w()&&(0,d.jsxs)(f.InlineChildren,{size:f.InlineChildren.Sizes.XxSmall,children:[(0,d.jsx)(f.Text,{color:f.Text.Colors.TextSecondary,styles:f.Text.Styles.Body1,children:i.ZP.t("convenience_productModal_serving_size")}),(0,d.jsx)(f.Text,{color:f.Text.Colors.TextSecondary,styles:f.Text.Styles.Body1,children:p})]}),x()&&(0,d.jsxs)(f.InlineChildren,{size:f.InlineChildren.Sizes.XxSmall,children:[(0,d.jsx)(f.Text,{color:f.Text.Colors.TextSecondary,styles:f.Text.Styles.Body1,children:i.ZP.t("convenience_productModal_serving_per_container")}),(0,d.jsx)(f.Text,{color:f.Text.Colors.TextSecondary,styles:f.Text.Styles.Body1,children:r})]}),(0,d.jsx)(g.Z0,{}),(0,d.jsx)(j,{nutrients:t,shouldHideNutritionalHeaders:h()}),v&&(0,d.jsx)(f.Text,{color:f.Text.Colors.TextTertiary,styles:f.Text.Styles.Regular12,children:v}),t&&t.length>0&&(0,d.jsx)(l._,{onVisible:function(){var a,b,d,e;m.EY.logNutritionalInfoView({itemId:null!==(d=null===(a=c())||void 0===a?void 0:a.id)&&void 0!==d?d:"",itemMsid:null!==(e=null===(b=c())||void 0===b?void 0:b.itemMsid)&&void 0!==e?e:""})}})]})]}):null}},97139:function(a,b,c){c.d(b,{r:function(){return i}});var d=c(85893),e=c(95899),f=c(10071),g=c(67294),h=c(50579),i=function(a){var b=a.nutritionalInfo,c=(null==b?void 0:b.details)||[];return(0,d.jsx)(d.Fragment,{children:null==c?void 0:c.map(function(a){if(!a)return null;var b=a.header,c=a.body;return(0,d.jsxs)(g.Fragment,{children:[(0,d.jsx)(e.default,{type:e.default.Types.FullBorder,verticalMargin:e.default.Sizes.Small}),(0,d.jsxs)("div",{children:[(0,d.jsx)(f.Text,{styles:f.Text.Styles.SectionTitle,children:b}),(0,d.jsx)(h.GI,{color:f.Text.Colors.TextSecondary,styles:f.Text.Styles.Body1,children:c})]})]},b)})})}},69797:function(a,b,c){c.d(b,{M:function(){return h}});var d=c(67294),e=c(23397),f=c(97405),g=function(a){var b={};return(null==a?void 0:a.length)&&(b={header:null,body:[{id:"",header:[],body:a,layout:null,custom:null},],page:null,custom:null,logging:null}),b},h=function(a){var b=a.legoSectionBodyList,c=a.shouldSuppressSeeAll;return d.useMemo(function(){var a,d=null===(a=(0,f.HZ)(b))||void 0===a?void 0:a.map(function(a){var b,d,f;return c&&(null==a||null===(f=a.events)||void 0===f||delete f.click),((null===(b=a.id)||void 0===b?void 0:b.includes(e.kF.CAROUSEL_STANDARD))||(null===(d=a.id)||void 0===d?void 0:d.includes(e.kF.GRID_VERTICAL)))&&(a.custom?a.custom.shouldRenderVirtual=!0:a.custom={shouldRenderVirtual:!0}),a});return g(d)},[b,c])}},34520:function(a,b,c){c.d(b,{d:function(){return h}});var d=c(85893),e=c(1968),f=c(10071);c(67294);var g=c(23685),h=function(a){var b,c,h=a.handleClose,i=a.termsAndConditions,j=(null==i?void 0:null===(b=i.disclaimer)||void 0===b?void 0:null===(c=b.cms)||void 0===c?void 0:c.description)||(null==i?void 0:i.copy);return(0,d.jsx)(e.Modal,{title:g.ZP.t("convenience_common_termsAndConditions_title"),primaryAction:{text:g.ZP.t("convenience_common_buttonCTA_okay"),onClick:h},onClose:h,shouldCloseOnOverlayClick:!1,children:(0,d.jsx)(f.Text,{children:j})})}},7975:function(a,b,c){c.d(b,{O:function(){return o}});var d=c(26042),e=c(10253),f=c(85893),g=c(10071),h=c(44908),i=c.n(h),j=c(67294),k=c(37387),l=c(846),m=c(23685),n=function(a){var b,c,d=a.products.map(function(a){var b,c;return{productId:a.id,variant:null!==(I=null==a?void 0:null===(b=a.variation)||void 0===b?void 0:b.variant)&&void 0!==I?I:null,size:(null==a?void 0:null===(c=a.variation)||void 0===c?void 0:c.size)||null}}),h=a.allowNullVariationValue,n=a.updatedSelectedItem,o=h?d.some(function(a){return null!==a.variant}):d.every(function(a){return null!==a.variant}),p=h?d.some(function(a){return null!==a.size}):d.every(function(a){return null!==a.size}),q=(0,e.Z)(j.useState(d[0].variant),2),r=q[0],s=q[1],t=(0,e.Z)(j.useState(d[0].size),2),u=t[0],v=t[1],w=(0,e.Z)(j.useState(d[0].productId),2),x=w[0],y=w[1];j.useEffect(function(){if(h&&n&&n.id!==x){var a,b;y(n.id),v((null===(a=n.variation)||void 0===a?void 0:a.size)||null),s((null===(b=n.variation)||void 0===b?void 0:b.variant)||null)}},[h,n,x]);var z=i()(d.map(function(a){return a.variant})),A=i()(d.map(function(a){return a.size})),B=[],C=[],D=function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.products.some(function(a){var c=a.variation;return c&&c.variant===b&&c.size===u})},E=function(b){var c=u;if(!D(b)){var d=a.products.find(function(a){return!!a.variation&&a.variation.variant===b});(null==d?void 0:d.variation)&&v(c=d.variation.size)}return c};if(o){var F=!0,G=!1,H=void 0;try{for(var I,J,K=function(){var b=J.value;if(h&&!b)return"continue";B.push({label:b,value:b,selected:b===r,onSelected:function(){var c=a.products.find(function(a){return a.variation.variant===b&&a.variation.size===E(b)});s(b),y(c.id),a.onSelectionChanged(c)}})},L=z[Symbol.iterator]();!(F=(J=L.next()).done);F=!0)K()}catch(M){G=!0,H=M}finally{try{F||null==L.return||L.return()}finally{if(G)throw H}}}if(p){var N=!0,O=!1,P=void 0;try{for(var Q,R=function(){var b=Q.value;if(h&&!b)return"continue";var c=d.find(function(a){return a.size===b&&a.variant===r});C.push({label:b,value:b,disabled:void 0===c,selected:b===u,onSelected:function(){var c,d=a.products.find(function(a){return h?a.variation.size===b:a.variation.variant===r&&a.variation.size===b});v(b),y(d.id),a.onSelectionChanged(d),h&&s((null===(c=d.variation)||void 0===c?void 0:c.variant)||null)}})},S=A[Symbol.iterator]();!(N=(Q=S.next()).done);N=!0)R()}catch(T){O=!0,P=T}finally{try{N||null==S.return||S.return()}finally{if(O)throw P}}}return B.length>=1&&(b=(0,f.jsxs)(j.Fragment,{children:[(0,f.jsx)(g.Text,{size:g.Text.Sizes.S12,weight:g.Text.Weights.Bold,children:m.ZP.t("convenience_variationFilter_variantSectionLabel")}),(0,f.jsx)(k.b,{options:B,dataAnchorId:l.D.ProductModal.TypeVariation,selectedProductId:x,isTypeVariant:!0})]})),C.length>=1&&(c=(0,f.jsxs)(j.Fragment,{children:[(0,f.jsx)(g.Text,{size:g.Text.Sizes.S12,weight:g.Text.Weights.Bold,children:m.ZP.t("convenience_variationFilter_sizeSectionLabel")}),(0,f.jsx)(k.b,{options:C,dataAnchorId:l.D.ProductModal.SizeVariation,selectedProductId:x})]})),(0,f.jsxs)(j.Fragment,{children:[(0,f.jsx)("div",{"data-testid":"type-variation",children:b}),(0,f.jsx)("div",{"data-testid":"size-variation",children:c})]})},o=function(a){var b,c,e=a.products.map(function(a){var d,e;return{productId:a.id,variant:null!==(b=null==a?void 0:null===(d=a.variation)||void 0===d?void 0:d.variant)&&void 0!==b?b:null,size:null!==(c=null==a?void 0:null===(e=a.variation)||void 0===e?void 0:e.size)&&void 0!==c?c:null}}),g=e.every(function(a){return null!==a.variant}),h=e.every(function(a){return null!==a.size});return e.length<=1||!(g||h)?null:(0,f.jsx)(n,(0,d.Z)({},a))}}}])