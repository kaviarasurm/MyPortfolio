$(document).ready(function(){function t(t,n){return Math.floor(Math.random()*(n-t+1)+t)}$(".section").on("mousemove",function(t){$ths=$(this),$ths.find(".background").parallax(110,t),$ths.find(".cloud1").parallax(80,t),$ths.find(".cloud2").parallax(50,t)});var n=[];$(".section .animate").each(function(){var a=$(this),o=a.width(),i=a.height(),c=.75,e=0;a.closest(".animate-block").hover(function(){e=3},function(){e=0}),a.find("span").each(function(){var a=$(this),h=a.width(),s=a.height(),f=c*(1==t(0,1)?-1:1)*(2/t(1,2)),u=c*(1==t(0,1)?-1:1)*(2/t(1,2)),l=t(0,o-h-c),r=t(0,i-s-c);a.css({left:l,top:r,opacity:1}),n.push(setInterval(function(){(r<0||r+s+c>i)&&(u=-u),(l<0||l+h+c>o)&&(f=-f),l+=f*e,r+=u*e,a.css({left:l,top:r})},20))})})});