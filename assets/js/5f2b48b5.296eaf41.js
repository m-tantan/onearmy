"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={id:"manualBackups",title:"Manual Backups"},i=void 0,l={unversionedId:"Server Maintenance/manualBackups",id:"Server Maintenance/manualBackups",title:"Manual Backups",description:"In order to fully backup the platform there are 3 areas that need to be backed up:",source:"@site/docs/Server Maintenance/manual-backups.md",sourceDirName:"Server Maintenance",slug:"/Server Maintenance/manualBackups",permalink:"/Server Maintenance/manualBackups",draft:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Server Maintenance/manual-backups.md",tags:[],version:"current",frontMatter:{id:"manualBackups",title:"Manual Backups"},sidebar:"mainSidebar",previous:{title:"Automated Backup and Migration",permalink:"/Server Maintenance/dataMigration"},next:{title:"Overview",permalink:"/Environmental Impact/environmental-impact"}},c={},p=[{value:"Importing Data from a Backup",id:"importing-data-from-a-backup",level:2},{value:"Migrate/Clone",id:"migrateclone",level:2},{value:"Service worker",id:"service-worker",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to fully backup the platform there are 3 areas that need to be backed up:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Firestore Database\n",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/firestore/import-export?project=onearmyworld"},"https://console.cloud.google.com/firestore/import-export?project=onearmyworld")),(0,o.kt)("p",{parentName:"li"},"Use in interactive export tool to create a backup of the database. If the data is simply for re-importing later the entire database can be selected. If only some specific data collections are likely to be imported, or tools like bigquery will be used to analyse the exported data then individual collections should be specified (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"v3_howtos"),")"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(9866).Z,width:"839",height:"786"})),(0,o.kt)("p",{parentName:"li"},"The backup can be made to the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"onearmyworld-exports")," bucket, or a personal storage bucket. Exports should be named in a consistent way, prefixed with a timestamp (",(0,o.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd"),")"),(0,o.kt)("p",{parentName:"li"},"The backup can also be downloaded locally using the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/gsutil"},"gsutil")," tool"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"gsutil cp -r gs://onearmyworld-exports/name-of-backup ./my-local-backup-folder\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Firebase Storage\nThis is a bucket in firebase cloud storage, and so can be handled in a similar way to the firestore database, via the gcloud console"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(478).Z,width:"1014",height:"504"})),(0,o.kt)("p",{parentName:"li"},"Additionally, files can be downloaded to backup locally or to another storage provider via ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/gsutil"},"gsutil")," run from a local command line, e.g."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"gsutil cp -r \\\ngs://onearmyworld.appspot.com/uploads \\\n./my-local-backup-folder\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Firebase Auth Users",(0,o.kt)("br",{parentName:"p"}),"\n","See documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cli/auth"},"https://firebase.google.com/docs/cli/auth")))),(0,o.kt)("h2",{id:"importing-data-from-a-backup"},"Importing Data from a Backup"),(0,o.kt)("p",null,"The same graphical interface can be used to import data. However care should be taken before importing in case of unintended side-effects."),(0,o.kt)("p",null,"Specifically firebase functions should first be disabled and data may need to first be deleted from the target project."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If functions are triggered on database changes they will be triggered for every document that is imported")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When importing a collection any existing data will be merged with the import.")),(0,o.kt)("h2",{id:"migrateclone"},"Migrate/Clone"),(0,o.kt)("p",null,"In order to migrate the data to another server similar steps must be taken and permissions"),(0,o.kt)("h2",{id:"service-worker"},"Service worker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"activate required api: ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com"},"https://console.cloud.google.com/apis/api/cloudresourcemanager.googleapis.com")),(0,o.kt)("li",{parentName:"ul"},"creating"),(0,o.kt)("li",{parentName:"ul"},"permissions (easiest to assign as viewer for source, and datastore import/export target)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Source firestore - viewer"),(0,o.kt)("li",{parentName:"ul"},"Target firestore - viewer, datastore import/export"),(0,o.kt)("li",{parentName:"ul"},"Storage bucket - storage admin"),(0,o.kt)("li",{parentName:"ul"},"Service Account User"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/firestore/docs/security/iam#roles"},"https://cloud.google.com/firestore/docs/security/iam#roles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access"},"https://cloud.google.com/iam/docs/granting-changing-revoking-access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud projects list\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gcloud auth list\n")))}u.isMDXComponent=!0},9866:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/firestore-backup-1-533178e0157316bc3f68bd140b8e4a77.png"},478:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/firestore-backup-2-8c9013a546820b0de1046fb0ff874581.png"}}]);