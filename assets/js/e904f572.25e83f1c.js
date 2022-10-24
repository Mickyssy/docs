"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:20},s="Server Side Stack",o={unversionedId:"launchpad/server-side-stack",id:"launchpad/server-side-stack",title:"Server Side Stack",description:"Server Side Stack",source:"@site/docs/launchpad/server-side-stack.md",sourceDirName:"launchpad",slug:"/launchpad/server-side-stack",permalink:"/launchpad/server-side-stack",draft:!1,editUrl:"https://github.com/graphops/docs/edit/main/docs/launchpad/server-side-stack.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"launchpadSidebar",previous:{title:"Client Side Tooling",permalink:"/launchpad/client-side-tooling"},next:{title:"Frequently Asked Questions",permalink:"/launchpad/faq"}},c={},l=[{value:"Your Kubernetes cluster",id:"your-kubernetes-cluster",level:2},{value:"Kubernetes architecture",id:"kubernetes-architecture",level:3},{value:"Cluster Services that come with Launchpad",id:"cluster-services-that-come-with-launchpad",level:2},{value:"The <code>sealed-secrets</code> namespace",id:"the-sealed-secrets-namespace",level:3},{value:"The <code>storage</code> namespace",id:"the-storage-namespace",level:3},{value:"The <code>monitoring</code> namespace",id:"the-monitoring-namespace",level:3},{value:"The <code>ingress</code> namespace",id:"the-ingress-namespace",level:3},{value:"The <code>postgres-operator</code> namespace",id:"the-postgres-operator-namespace",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-side-stack"},"Server Side Stack"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Side Stack",src:r(2764).Z,width:"960",height:"540"})),(0,a.kt)("h2",{id:"your-kubernetes-cluster"},"Your Kubernetes cluster"),(0,a.kt)("p",null,"Note that Launchpad uses ",(0,a.kt)("a",{parentName:"p",href:"https://k0sproject.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"k0s"))," as the ",(0,a.kt)("a",{parentName:"p",href:"https://acloudguru.com/blog/engineering/which-kubernetes-distribution-is-right-for-you"},(0,a.kt)("inlineCode",{parentName:"a"},"Kubernetes distribution"))," for managing Kubernetes. K0s was picked for this project as it is viewed to be one of the top open-source lightweight certified Kubernetes distributions targeted at public & private clouds, on-premises, edge & hybrid. This capability together with it's small compute footprint - it can run on machines with less than half GB of RAM - makes k0s the ideal distribution for most Indexers."),(0,a.kt)("h3",{id:"kubernetes-architecture"},"Kubernetes architecture"),(0,a.kt)("p",null,"Details on the different components that can be normally found in a Kubernetes cluster can be found ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"here"),".\nNote that in a K0s cluster a few of the components that make up your usual Kubernetes cluster have been abstracted away in a single binary. If you have experience with other Kubernetes distributions you will notice when spinning up your ",(0,a.kt)("inlineCode",{parentName:"p"},"k0s")," cluster, that you are missing ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," . This ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k0sproject.io/v1.23.6+k0s.2/architecture/#control-plane"},"design")," is intentional."),(0,a.kt)("h2",{id:"cluster-services-that-come-with-launchpad"},"Cluster Services that come with Launchpad"),(0,a.kt)("h3",{id:"the-sealed-secrets-namespace"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"sealed-secrets")," namespace"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"the-storage-namespace"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"storage")," namespace"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"the-monitoring-namespace"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"monitoring")," namespace"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"the-ingress-namespace"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"ingress")," namespace"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h3",{id:"the-postgres-operator-namespace"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"postgres-operator")," namespace"),(0,a.kt)("p",null,"TODO"))}u.isMDXComponent=!0},2764:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-side-stack-fc9a08a60bd5fb8ffd1f622a8b0964dc.svg"}}]);