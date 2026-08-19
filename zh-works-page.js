(()=>{
  function apply(){
    if(localStorage.getItem('artlink-language')==='en'||location.hash!=='#works')return;
    const banner=document.querySelector('.worksBanner');
    if(banner){
      const crumb=banner.querySelector('.crumb'); if(crumb) crumb.textContent='首页　›　作品';
      const title=banner.querySelector('h1'); if(title) title.textContent='作品';
      const desc=banner.querySelector('p'); if(desc) desc.textContent='从十七世纪到现代艺术，循着时间、媒介与艺术表达的线索，探索作品档案。';
      const link=banner.querySelector('.textLink'); if(link) link.textContent='关于艺界之联　⟶';
    }
    const filters=document.querySelector('.workFilters');
    if(filters){
      const labels=filters.querySelectorAll('label');
      const labelTexts=['艺术家','流派','媒介','排序'];
      const movements={Impressionism:'印象派',Pointillism:'点彩派','Post-Impressionism':'后印象派','Abstract Art':'抽象艺术','Dutch Golden Age':'荷兰黄金时代',Expressionism:'表现主义','Modern Chinese Art':'中国现代艺术','Academic Realism':'学院现实主义'};
      labels.forEach((label,i)=>{if(i<4){const select=label.querySelector('select'); label.childNodes[0].nodeValue=labelTexts[i]; if(select){const opts=select.options; if(i===0){if(opts[0])opts[0].text='全部艺术家';[...opts].slice(1).forEach(o=>{const a=window.ARCHIVE_DATA?.artists.find(x=>x.id===o.value);if(a)o.text=a.nameZh||a.name})} if(i===1){if(opts[0])opts[0].text='全部流派';[...opts].slice(1).forEach(o=>o.text=movements[o.value]||o.value)} if(i===2&&opts[0])opts[0].text='全部媒介'; if(i===3){if(opts[0])opts[0].text='最新'; if(opts[1])opts[1].text='最早'}}}});
      const heading=filters.querySelector('b'); if(heading)heading.textContent='筛选条件';
      const search=filters.querySelector('#workSearch'); if(search)search.placeholder='搜索作品…';
    }
    const top=document.querySelector('.worksCatalog .catalogTop');
    if(top){const b=top.querySelector('b');if(b)b.innerHTML='全部作品　·　<span id="workCount">87</span>';const view=top.querySelector('span');if(view)view.textContent='查看方式　▦　☰';}
  }
  addEventListener('hashchange',()=>setTimeout(apply,100));
  apply();
})();
