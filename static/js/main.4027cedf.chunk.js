(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(3),i=a(1),o=a(9),l=a(10),c=a(13),d=a(11),u=a(12),m=a(2),p=a.n(m),h=(a(6),a(7),a(5)),b=a.n(h),g=a(0),y=function(e){var t=e.tasks;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{className:"App__list list-group",children:t.map((function(e){return Object(g.jsx)("li",{className:"App__item list-group-item list-group-item-action flex-column",children:e.user&&Object(g.jsxs)("div",{className:"d-flex flex-column w-100 App__item--container",children:[Object(g.jsx)("p",{className:"App__user-name",children:e.user.name}),Object(g.jsx)("p",{className:"App__task",children:e.title})]})},e.id)}))})})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],k=/^[a-zA-Za-\xe5a-\xf6-w-\u044f 0-9]/g,x=Object(u.a)(f),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",taskId:x[x.length-1].id+1,userId:0,preparedTasks:x.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:j.find((function(t){return t.id===e.userId}))||null})})),noTitleError:"",nonValidTitle:"",noUserError:""},e.validate=function(){var t=e.state,a=t.title,n=t.userId,r=!0;return a||(e.setState({noTitleError:"Please enter the title"}),r=!1),a.match(k)||(e.setState({nonValidTitle:"Please use letters, digits and spaces only"}),r=!1),n||(e.setState({noUserError:"Please choose a user"}),r=!1),!!r},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},n,+r?+r:r))}))},e.addTask=function(t){t.preventDefault(),e.validate()&&(x.push({userId:e.state.userId,id:e.state.taskId,title:e.state.title,completed:!1}),e.setState((function(e){return{taskId:e.taskId+1,preparedTasks:x.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:j.find((function(t){return t.id===e.userId}))||null})}))}})),e.setState({title:"",userId:0,noTitleError:"",nonValidTitle:"",noUserError:""}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.userId,n=e.preparedTasks,r=e.noTitleError,s=e.nonValidTitle,i=e.noUserError;return Object(g.jsxs)("div",{className:"App container",children:[Object(g.jsxs)("form",{className:"form-inline form-row App__form",id:"addTask",onSubmit:this.addTask,children:[Object(g.jsxs)("label",{className:"sr-only col-sm-3",htmlFor:"inlineFormCustomSelect",children:[Object(g.jsxs)("select",{id:"inlineFormCustomSelect",className:"form-select",name:"userId",value:a,onChange:this.handleChange,children:[Object(g.jsx)("option",{value:0,children:"Choose a user"}),j.map((function(e){return Object(g.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(g.jsx)("p",{className:b()("App__alert alert alert-danger",{"App__alert--shown":i&&0===a}),children:i&&0===a&&i})]}),Object(g.jsxs)("label",{htmlFor:"inlineFormInputGroup",className:"col-sm-3",children:[Object(g.jsx)("input",{id:"inlineFormInputGroup",className:"form-control",type:"text",placeholder:"Write your task here",name:"title",value:t,onChange:this.handleChange}),Object(g.jsx)("p",{className:b()("App__alert alert alert-danger",{"App__alert--shown":r&&!t||s&&!t.match(k)&&t}),children:r&&!t&&r||s&&!t.match(k)&&t&&s})]}),Object(g.jsx)("button",{className:"btn btn-primary col-sm-3 App__button",type:"submit",form:"addTask",children:"Add"})]}),Object(g.jsx)(y,{tasks:n})]})}}]),a}(p.a.Component);r.a.render(Object(g.jsx)(v,{}),document.getElementById("root"))},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.4027cedf.chunk.js.map