(function(){var fnGetNotLoadedIds=function(){var ids=[];document.querySelectorAll('.product-available:not([loaded])').forEach($el=>{var aux=$el.getAttribute('available-id').split(' ')
Array.prototype.push.apply(ids,aux)});return ids.filter(String)}
var fnLoad=function(ids){if(ids.length===0){return}
$.get({'url':'/ecommerce/availabilities/items?ids[]='+ids.join('&ids[]='),'success':function(response){var itemAvailabilities=response.data;if(!1===Array.isArray(itemAvailabilities)){itemAvailabilities=[itemAvailabilities]}
document.querySelectorAll('[available-id]').forEach($item=>{elements=$item.getAttribute('available-id').split(' ').filter(String)
var availability=!1;for(var element of elements){itemAvailabilities.find(x=>x.id==element).available?availability=true:""}
if(!availability){$item.style.display="block";$item.setAttribute("loaded",'1');if(null!==$item.nextElementSibling&&$item.nextElementSibling.classList.contains("subscribePrice")){$item.nextElementSibling.style.display="none"}
if($item.previousElementSibling.classList.contains('price-box')){$item.previousElementSibling.style.display="none"}}else{return}})}})};fnLoad(fnGetNotLoadedIds());CanopusEventCenter.addListener('Showcase.InfiniteScroll.Loaded',function(){setTimeout(function(){fnLoad(fnGetNotLoadedIds())},100)})})()