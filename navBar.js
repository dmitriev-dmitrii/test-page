
const navSourceList =  [
          {href:"index.html",text:"Home"},
          {href:"dates.html",text:"Dates"},
          {href:"flex-gap.html",text:"Flex Gap"},
          {href:"canvas.html",text:"Canvas"},
          {href:"reactive.html",text:"Reactive"},
     ]

export default (function () {
     
   const liArr = navSourceList.map(({href,text})=> `<li><a href="${href}">${text}</a></li>`).join('')

   const nav =   document.createElement('nav')


   nav.innerHTML = (
     `<ul> ${liArr} </ul>` )
     
   let header = document.querySelector('header')

   if (header){
     header.prepend(nav)
     return
   }
   header = document.createElement('header')
   header.append(nav)
   document.querySelector('body').prepend(header)
})()