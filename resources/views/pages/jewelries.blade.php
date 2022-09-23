@extends('layouts.frontend')

@section('content')



<div class='container'>
<div class='row property-listing-breadcrumb'>
<div class='col-md-8 col-sm-12'>
<ol class='breadcrumb' itemscope itemtype='https://schema.org/BreadcrumbList'>
<li class='' itemprop='itemListElement' itemscope itemtype='https://schema.org/ListItem'>
<meta content='1' itemprop='position'>
<a itemprop="item" href="/"><span itemprop='name'>LinitLuxuries</span>
</a></li>
<li class='' itemprop='itemListElement' itemscope itemtype='https://schema.org/ListItem'>
<meta content='2' itemprop='position'>
<a itemprop="item" href="#"><span itemprop='name'>For Sale</span>
</a></li>
<li class='active' itemprop='itemListElement' itemscope itemtype='https://schema.org/ListItem'>
<meta content='3' itemprop='position'>
<span itemprop='name'>Jewelries</span>
</li>
</ol>
</div>
<div class='col-md-4'>
<div class='total-results'>Show <span>All</span> results</div>
</div>
</div>
<div class='bdr-btm'></div>
<div class='row' id='sort-and-count'>
<div class='col-md-9'>
<h1 class='city-page-heading'>All Jewelries</h1>
</div>

</div>
</div>
</div>
<div class='container 3xl:flex 3xl:justify-center 3xl:w-full 3xl:max-w-full'>
<div class='hidden sticky top-[275px] w-[300px] h-[1050px] bg-grey-6 overflow-hidden my-4 mr-6 3xl:block'>
<span class='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-grey-1 uppercase'>Ad</span>
<div class='h-full w-full' data-ezoic--main-target='placeholder' id='ezoic-pub-ad-placeholder-696'></div>
</div>
















@foreach($jewelries as $jewelry)
<div class='col-md-3 col-xs-12 d-inline-flex'>
<div class='property thumbnail property-partial-6642254'>
<button class='favorite' data-property-id='6642254' data-toggle-path='/listings/appartement-a-louer-paris-54f7cc/toggle-favorite'></button>
<a href="{{ url('/jewelry-details/'.$jewelry->slug) }}"><div class='swiper-container'>
<div class='swiper-wrapper'>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159897' data-src="{{asset($jewelry->jewelryImages[0]->image)}}" onerror='imageLoadFailed(this)' src="{{asset($jewelry->jewelryImages[0]->image)}}">
</div>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159900' data-src='https://img.rentola.com/dLL9m-gN3kNChZsVCuSgkilMNpo=/345x250/filters:format(jpeg)/http%3A%2F%2Fwww.immobilier-iledefrance.net%2Foffice5%2Fbook_your_paris%2Fcatalog%2Fimages%2Fpr_p%2F4%2F8%2F2%2F2%2F4%2F9%2F1%2F7%2F48224917g.jpg' onerror='imageLoadFailed(this)' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAD6CAQAAAChBPykAAAB4ElEQVR42u3SAQ0AAAjDMO5fIWpAB6GVsCw9BYfEslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyImBZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWtSyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZflhAfnAzfpXLKRVAAAAAElFTkSuQmCC'>
</div>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159901' data-src='https://img.rentola.com/IEjif9RHISefw8eCjoRj1RIIP7c=/345x250/filters:format(jpeg)/http%3A%2F%2Fwww.immobilier-iledefrance.net%2Foffice5%2Fbook_your_paris%2Fcatalog%2Fimages%2Fpr_p%2F4%2F8%2F2%2F2%2F4%2F9%2F1%2F7%2F48224917h.jpg' onerror='imageLoadFailed(this)' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAD6CAQAAAChBPykAAAB4ElEQVR42u3SAQ0AAAjDMO5fIWpAB6GVsCw9BYfEslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyImBZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWtSyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZflhAfnAzfpXLKRVAAAAAElFTkSuQmCC'>
</div>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159902' data-src='https://img.rentola.com/wt--A2MosnThLvCWqBVzbB0PcoU=/345x250/filters:format(jpeg)/http%3A%2F%2Fwww.immobilier-iledefrance.net%2Foffice5%2Fbook_your_paris%2Fcatalog%2Fimages%2Fpr_p%2F4%2F8%2F2%2F2%2F4%2F9%2F1%2F7%2F48224917i.jpg' onerror='imageLoadFailed(this)' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAD6CAQAAAChBPykAAAB4ElEQVR42u3SAQ0AAAjDMO5fIWpAB6GVsCw9BYfEslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyImBZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWtSyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZflhAfnAzfpXLKRVAAAAAElFTkSuQmCC'>
</div>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159903' data-src='https://img.rentola.com/y1R1730mb_Cnmm9C_dvOhoDcwN4=/345x250/filters:format(jpeg)/http%3A%2F%2Fwww.immobilier-iledefrance.net%2Foffice5%2Fbook_your_paris%2Fcatalog%2Fimages%2Fpr_p%2F4%2F8%2F2%2F2%2F4%2F9%2F1%2F7%2F48224917j.jpg' onerror='imageLoadFailed(this)' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAD6CAQAAAChBPykAAAB4ElEQVR42u3SAQ0AAAjDMO5fIWpAB6GVsCw9BYfEslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyImBZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWtSyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZflhAfnAzfpXLKRVAAAAAElFTkSuQmCC'>
</div>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159904' data-src='https://img.rentola.com/I-bwjsAGVz8Rw5WXECceXJ9SZgw=/345x250/filters:format(jpeg)/http%3A%2F%2Fwww.immobilier-iledefrance.net%2Foffice5%2Fbook_your_paris%2Fcatalog%2Fimages%2Fpr_p%2F4%2F8%2F2%2F2%2F4%2F9%2F1%2F7%2F48224917k.jpg' onerror='imageLoadFailed(this)' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAD6CAQAAAChBPykAAAB4ElEQVR42u3SAQ0AAAjDMO5fIWpAB6GVsCw9BYfEslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyImBZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWtSyWBcuCZbEsWBYsi2XBsmBZLAuWBctiWbAsWBbLgmXBslgWLAuWxbJgWbAslgXLgmWxLFgWLAuWxbJgWbAslgXLgmWxLFgWLItlwbJgWSwLlgXLYlmwLFgWy4JlwbJYFiwLlsWyYFmwLFgWy4JlwbJYFiwLlsWyYFmwLJYFy4JlsSxYFiyLZcGyYFksC5YFy2JZsCxYFsuCZcGyYFksC5YFy2JZsCxYFsuCZcGyWBYsC5bFsmBZsCyWBcuCZflhAfnAzfpXLKRVAAAAAElFTkSuQmCC'>
</div>
</div>
<div></div>
<div ></div>
<div class='location-label'>
{{ $jewelry->name }}
</div>
</div>
</a><div class='caption text-center'>
<div class='row'>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>
<img src='data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTMuMDQ1IDUxMy4wNDUiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEzLjA0NSA1MTMuMDQ1IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im0yODMuNzI5IDE5MS45MjNjLTUuMzE1LTIuMzIzLTExLjYxOC0xLjM5NC0xNS45ODUgMi40NS00Ljg1NCA0LjI3My02LjQyNSAxMS40MjYtMy43OTUgMTcuMzM1IDIuMzg0IDUuMzU4IDcuODM0IDguOTI1IDEzLjcwNCA4LjkyNSA3LjQ3MiAwIDEzLjk3My01Ljc1MSAxNC44ODgtMTMuMTYzLjc5OC02LjQ2My0yLjgzMS0xMi45MzQtOC44MTItMTUuNTQ3eiIvPjxwYXRoIGQ9Im0yMDMuNTQyIDIxMC42ODFjMi4wNzkgNS44OTQgNy44NjYgOS45NTIgMTQuMTEgOS45NTIgNy4wODUgMCAxMy4zMDMtNS4xNDggMTQuNzEtMTIuMDcgMS4yNTEtNi4xNTctMS42NDUtMTIuNTY1LTcuMDAyLTE1Ljc5NS01LjM2Ni0zLjIzNi0xMi4zNzMtMi42OS0xNy4yMTcgMS4yNjUtNC44NzEgMy45NzctNi42ODEgMTAuNzQ4LTQuNjAxIDE2LjY0OHoiLz48cGF0aCBkPSJtMTU3LjY2MiAyMjAuNjMzYzcuMDc3IDAgMTMuMjk1LTUuMTU1IDE0LjctMTIuMDcgMS4yNS02LjE1My0xLjY0Ni0xMi41NjYtNy4wMDItMTUuNzk1LTUuMzc0LTMuMjQxLTEyLjM2My0yLjY4NC0xNy4yMTcgMS4yNjUtNC44NzYgMy45NjctNi42NzggMTAuNzU3LTQuNiAxNi42NDkgMi4wODEgNS45MDEgNy44NzIgOS45NTEgMTQuMTE5IDkuOTUxeiIvPjxwYXRoIGQ9Im0yODMuNzI5IDEzMS45MjRjLTUuMzAzLTIuMzM4LTExLjYyNC0xLjM3OS0xNS45ODMgMi40NDktNC44NjcgNC4yNzMtNi40MTIgMTEuNDE4LTMuNzk3IDE3LjMzMSAyLjM3MSA1LjM2MSA3Ljg0MSA4LjkyOSAxMy43MDQgOC45MjkgNy40NzEgMCAxMy45NzMtNS43NDggMTQuODg4LTEzLjE2My44LTYuNDc5LTIuODM2LTEyLjkxMi04LjgxMi0xNS41NDZ6Ii8+PHBhdGggZD0ibTIxNy42NTIgMTYwLjYzM2M3LjA4NiAwIDEzLjMwMy01LjE0NyAxNC43MS0xMi4wNyAxLjI1MS02LjE1Ni0xLjY0NS0xMi41NjUtNy4wMDItMTUuNzk1LTUuMzY3LTMuMjM2LTEyLjM3Mi0yLjY5MS0xNy4yMTcgMS4yNjUtNC44NyAzLjk3Ny02LjY4MSAxMC43NDktNC42IDE2LjY0OSAyLjA3OCA1Ljg5NCA3Ljg2NSA5Ljk1MSAxNC4xMDkgOS45NTF6Ii8+PHBhdGggZD0ibTE1Ny42NjIgMTYwLjYzM2M3LjA3OSAwIDEzLjI5NS01LjE1NiAxNC43LTEyLjA3IDEuMjUtNi4xNTItMS42NDYtMTIuNTY2LTcuMDAyLTE1Ljc5NS01LjM2Ni0zLjIzNS0xMi4zNzQtMi42OS0xNy4yMTcgMS4yNjUtNC44NyAzLjk3Ny02LjY4MSAxMC43NDktNC42IDE2LjY0OSAyLjA4IDUuOSA3Ljg3IDkuOTUxIDE0LjExOSA5Ljk1MXoiLz48L2c+PGc+PHBhdGggZD0ibTMzLjk1OSAzNzYuNDI5Yy0uMDk2IDAtLjE5MS0uMDA3LS4yODctLjAwN3YxMS4zNjFjMCA0NS40OTMgMzYuODc5IDgyLjM3MiA4Mi4zNzIgODIuMzcyaDIwLjY5MWMtLjA3NC42MDItLjEyMyAxLjIxMS0uMTIzIDEuODMzdjI1LjUzNWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1di0yNS41MzVjMC0uNjIyLS4wNDktMS4yMzEtLjEyMy0xLjgzM2gxODAuMDY3Yy0uMDc0LjYwMi0uMTIzIDEuMjExLS4xMjMgMS44MzN2MjUuNTM1YzAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTV2LTI1LjUzNWMwLS42MjItLjA1LTEuMjMxLS4xMjMtMS44MzNoMjAuNjkxYzQ1LjQ5MyAwIDgyLjM3Mi0zNi44NzkgODIuMzcyLTgyLjM3MnYtMTEuMzYxYy0uMDk2IDAtLjE5LjAwNy0uMjg3LjAwN3oiLz48cGF0aCBkPSJtNDc5LjA4NiAyNzguNTFoLTQxOC40MTl2LTIxMi4xYzAtMTkuNzg5IDE2LjEtMzUuODg4IDM1Ljg4OS0zNS44ODhoMzIuODkxYzUuNTU2IDAgMTAuODU3IDIuMzg1IDE0LjU0MiA2LjU0M2wyMC40MDkgMjMuMDIzYy4xMS4xMjQuMjMyLjIzMi4zNDUuMzUydjEwLjkzN2gtOS45OTljLTguMjg1IDAtMTUgNi43MTUtMTUgMTUgMCA0LjE0MiAxLjY3OSA3Ljg5MiA0LjM5MyAxMC42MDdzNi40NjQgNC4zOTMgMTAuNjA3IDQuMzkzaDEyNC4wOTZjOC4yODUgMCAxNS02LjcxNSAxNS0xNSAuMDAxLTguMjg0LTYuNzE1LTE1LTE1LTE1aC0xMHYtMTguODA2YzAtMjguNzQ1LTIzLjMwMy01Mi4wNDgtNTIuMDQ4LTUyLjA0OC0xOC40MTMgMC0zNC41OCA5LjU3LTQzLjgzMyAyMy45OThsLTYuNTItNy4zNTVjLTkuMzc2LTEwLjU3Ny0yMi44NTktMTYuNjQzLTM2Ljk5My0xNi42NDNoLTMyLjg5Yy0zNi4zMzEgMC02NS44ODkgMjkuNTU3LTY1Ljg4OSA2NS44ODh2MjEyLjI2MWMtMTcuMjEgMS42NTYtMzAuNjY3IDE2LjE1NC0zMC42NjcgMzMuNzk4IDAgMTguNzU1IDE1LjIwNCAzMy45NiAzMy45NTkgMzMuOTZoNDQ1LjEyNmMxOC43NTUgMCAzMy45Ni0xNS4yMDQgMzMuOTYtMzMuOTYgMC0xOC43NTUtMTUuMjA0LTMzLjk2LTMzLjk1OS0zMy45NnoiLz48L2c+PC9nPjwvc3ZnPg=='>

<div class='prop-value'>
</div>
</div>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>
<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5MC41NTcgMzkwLjU1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkwLjU1NyAzOTAuNTU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTM4OS43NzIsMjQ4LjI5NmwtNDIuOTkxLTY4LjA2M1Y1NS4wMjhsLTE3LjUtMTcuNUg2MS4yNzVsLTE3LjUsMTcuNXYxMjUuMjA0TDAuNzg0LDI0OC4yOTYNCgkJSDM4OS43NzJ6IE0zMTEuNzgxLDcyLjUyOHY4Ny4zNjJjLTIyLjU1My01LjgzNC02MS41MTQtMTMuMDI4LTExNi41MDMtMTMuMDI4cy05My45NSw3LjE5NC0xMTYuNTAzLDEzLjAyOFY3Mi41MjhIMzExLjc4MXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMjMxRjIwOyIgcG9pbnRzPSIwLDI2OS44MzEgMCwzMDQuODMxIDQwLjc3OCwzMDQuODMxIDQwLjc3OCwzNTMuMDI4IDc1Ljc3OCwzNTMuMDI4IDc1Ljc3OCwzMDQuODMxIA0KCQkzMTQuNzc4LDMwNC44MzEgMzE0Ljc3OCwzNTMuMDI4IDM0OS43NzgsMzUzLjAyOCAzNDkuNzc4LDMwNC44MzEgMzkwLjU1NywzMDQuODMxIDM5MC41NTcsMjY5LjgzMSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0xODEuMDc1LDEyOC42NTN2LTIwLjM4OWMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjI5LDkuODE0LTM5LjIyOSwyMS45MTZ2MzAuNjA0DQoJCWMwLDAsMjMuMTQtNS44MjYsMzkuMDQ1LTcuMzMyQzE1NS45OCwxMzAuMTc5LDE4MS4wNzUsMTI4LjY1MywxODEuMDc1LDEyOC42NTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yODcuOTQxLDEzOC44Njh2LTMwLjYwNGMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjMsOS44MTQtMzkuMjMsMjEuOTE2djIwLjM4OQ0KCQljMCwwLDI1LjA5NiwxLjUyNSwzOS40MTUsMi44ODNDMjY0LjgwMiwxMzMuMDQyLDI4Ny45NDEsMTM4Ljg2OCwyODcuOTQxLDEzOC44Njh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='>

<div class='prop-value'></div>
</div>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>

<div class='prop-label'>Type</div>
<div class='prop-value'>
Jewelries
</div>
</div>
</div>
</div>
<div class='buttons'>
<div class='rent fake-btn'>
<b>${{ $jewelry->selling_price }}</b>
</div>
<a class="see-more fake-btn" href="{{ url('/jewelry-details/'.$jewelry->slug) }}">Read more</a>
</div>
</div>
<script>
  $(document).on('page:change', function() {
    new Swiper('.property-partial-6642254 .swiper-container', {
      mousehweel: false,
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  });
</script>
</div>
@endforeach





































<div class='hidden' id='search-agent-frm'>
<div class='col-sm-4 col-md-3 col-xs-12'>
<div class='search-agent-signup-box'>
<strong>Notify me of similar properties</strong>
<p>67% of those who found a new home were subscribers of the search agent</p>
<form novalidate="novalidate" class="simple_form new_search_agent" id="324d2f37_new_search_agent" action="/search-agents/new" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input name="search_agent[property_types][]" type="hidden" value="" id="324d2f37_search_agent_property_types" />
<input type="hidden" name="search_agent[location]" id="324d2f37_search_agent_location" />
<input type="hidden" name="search_agent[max_rent]" id="324d2f37_search_agent_max_rent" />
<input type="hidden" name="search_agent[rooms]" id="324d2f37_search_agent_rooms" />
<div class="form-group email required search_agent_email"><input class="form-control string email required" placeholder="Enter your e-mail" type="email" name="search_agent[email]" id="324d2f37_search_agent_email" /></div>
<button name="button" type="submit" onclick="window.dataLayer.push({event: &#39;results_search_agent_signup_attempt&#39;})" class="btn btn-default"><b>Yes</b>, create free search agent</button>
</form></div>
</div>
</div>
<div id='filter-popup'>
<div style='position: relative'>
<img class='close' src='/close_button.png'>
<div class='max-rent'>
<span class='popup-head'>52,496 properties in United States</span>
<div class='clearfix'></div>
<span class='popup-head-sub'>Help us show the right properties for you.</span>
<ul class='list-unstyled'>
<li>
<div class='max-price-btn btn btn-success' data-price='1000' data-properties-count='17687'>Max rent 1,000 € /mo</div>
</li>
<li>
<div class='max-price-btn btn btn-success' data-price='2000' data-properties-count='34166'>Max rent 2,000 € /mo</div>
</li>
<li>
<div class='max-price-btn btn btn-success' data-price='3000' data-properties-count='41993'>Max rent 3,000 € /mo</div>
</li>
<li>
<div class='max-price-btn btn btn-success' data-price='4000' data-properties-count='45429'>Max rent 4,000 € /mo</div>
</li>
<div class='no-max-price-btn btn btn-danger' data-properties-count='52496'>No max</div>
</ul>
</div>
<div class='min-rooms hidden'>
<span class='popup-head'> properties in United States</span>
<span class='popup-head-sub'>Help us show the right properties for you.</span>
<ul class='list-unstyled'>
<li>
<div class='min-rooms-btn btn btn-success' data-count='1'>Min. 1 room</div>
</li>
<li>
<div class='min-rooms-btn btn btn-success' data-count='2'>Min. 2 rooms</div>
</li>
<li>
<div class='min-rooms-btn btn btn-success' data-count='3'>Min. 3 rooms</div>
</li>
<li>
<div class='min-rooms-btn btn btn-success' data-count='4'>Min. 4 rooms</div>
</li>
<div class='no-min-rooms-btn btn btn-danger'>No min</div>
</ul>
</div>
</div>
</div>
<div class='hide'>
<div id='onPageDefaultGeolocationOptions'>{&quot;slug&quot;:&quot;united-kingdom&quot;,&quot;title&quot;:&quot;United States&quot;}</div>
<div id='onPageSelectedDefaultGeolocation'>united-kingdom</div>
</div>
<div id='push'></div>
</div>
@include('layouts.footer')
@endsection