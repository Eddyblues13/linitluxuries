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
<span itemprop='name'>Cars</span>
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
<h1 class='city-page-heading'>All AutoMobiles</h1>
</div>

</div>
</div>
</div>
<div class='container 3xl:flex 3xl:justify-center 3xl:w-full 3xl:max-w-full'>
<div class='hidden sticky top-[275px] w-[300px] h-[1050px] bg-grey-6 overflow-hidden my-4 mr-6 3xl:block'>
<span class='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs text-grey-1 uppercase'>Ad</span>
<div class='h-full w-full' data-ezoic--main-target='placeholder' id='ezoic-pub-ad-placeholder-696'></div>
</div>














@foreach($cars as $car)
<div class='col-md-3 col-xs-12 d-inline-flex'>
<div class='property thumbnail property-partial-6642254'>
<button class='favorite' data-property-id='6642254' data-toggle-path='/listings/appartement-a-louer-paris-54f7cc/toggle-favorite'></button>
<a href="{{ url('/car-details/'.$car->slug) }}"><div class='swiper-container'>
<div class='swiper-wrapper'>
<div class='swiper-slide'>
<img class='property-image lazyload' data-image-id='61159897' width="500" height="200" data-src="{{asset($car->carImages[0]->image)}}"  onerror='imageLoadFailed(this)' src="{{asset($car->carImages[0]->image)}}">
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
<div></div>
<div class='location-label'>
{{ $car->name }}
</div>
</div>
</a><div class='caption text-center'>
<div class='row'>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>
<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5MC41NTcgMzkwLjU1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkwLjU1NyAzOTAuNTU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTM4OS43NzIsMjQ4LjI5NmwtNDIuOTkxLTY4LjA2M1Y1NS4wMjhsLTE3LjUtMTcuNUg2MS4yNzVsLTE3LjUsMTcuNXYxMjUuMjA0TDAuNzg0LDI0OC4yOTYNCgkJSDM4OS43NzJ6IE0zMTEuNzgxLDcyLjUyOHY4Ny4zNjJjLTIyLjU1My01LjgzNC02MS41MTQtMTMuMDI4LTExNi41MDMtMTMuMDI4cy05My45NSw3LjE5NC0xMTYuNTAzLDEzLjAyOFY3Mi41MjhIMzExLjc4MXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMjMxRjIwOyIgcG9pbnRzPSIwLDI2OS44MzEgMCwzMDQuODMxIDQwLjc3OCwzMDQuODMxIDQwLjc3OCwzNTMuMDI4IDc1Ljc3OCwzNTMuMDI4IDc1Ljc3OCwzMDQuODMxIA0KCQkzMTQuNzc4LDMwNC44MzEgMzE0Ljc3OCwzNTMuMDI4IDM0OS43NzgsMzUzLjAyOCAzNDkuNzc4LDMwNC44MzEgMzkwLjU1NywzMDQuODMxIDM5MC41NTcsMjY5LjgzMSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0xODEuMDc1LDEyOC42NTN2LTIwLjM4OWMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjI5LDkuODE0LTM5LjIyOSwyMS45MTZ2MzAuNjA0DQoJCWMwLDAsMjMuMTQtNS44MjYsMzkuMDQ1LTcuMzMyQzE1NS45OCwxMzAuMTc5LDE4MS4wNzUsMTI4LjY1MywxODEuMDc1LDEyOC42NTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yODcuOTQxLDEzOC44Njh2LTMwLjYwNGMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjMsOS44MTQtMzkuMjMsMjEuOTE2djIwLjM4OQ0KCQljMCwwLDI1LjA5NiwxLjUyNSwzOS40MTUsMi44ODNDMjY0LjgwMiwxMzMuMDQyLDI4Ny45NDEsMTM4Ljg2OCwyODcuOTQxLDEzOC44Njh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='>

<div class='prop-value'>
</div>
</div>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>
<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5MC41NTcgMzkwLjU1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkwLjU1NyAzOTAuNTU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTM4OS43NzIsMjQ4LjI5NmwtNDIuOTkxLTY4LjA2M1Y1NS4wMjhsLTE3LjUtMTcuNUg2MS4yNzVsLTE3LjUsMTcuNXYxMjUuMjA0TDAuNzg0LDI0OC4yOTYNCgkJSDM4OS43NzJ6IE0zMTEuNzgxLDcyLjUyOHY4Ny4zNjJjLTIyLjU1My01LjgzNC02MS41MTQtMTMuMDI4LTExNi41MDMtMTMuMDI4cy05My45NSw3LjE5NC0xMTYuNTAzLDEzLjAyOFY3Mi41MjhIMzExLjc4MXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMjMxRjIwOyIgcG9pbnRzPSIwLDI2OS44MzEgMCwzMDQuODMxIDQwLjc3OCwzMDQuODMxIDQwLjc3OCwzNTMuMDI4IDc1Ljc3OCwzNTMuMDI4IDc1Ljc3OCwzMDQuODMxIA0KCQkzMTQuNzc4LDMwNC44MzEgMzE0Ljc3OCwzNTMuMDI4IDM0OS43NzgsMzUzLjAyOCAzNDkuNzc4LDMwNC44MzEgMzkwLjU1NywzMDQuODMxIDM5MC41NTcsMjY5LjgzMSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0xODEuMDc1LDEyOC42NTN2LTIwLjM4OWMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjI5LDkuODE0LTM5LjIyOSwyMS45MTZ2MzAuNjA0DQoJCWMwLDAsMjMuMTQtNS44MjYsMzkuMDQ1LTcuMzMyQzE1NS45OCwxMzAuMTc5LDE4MS4wNzUsMTI4LjY1MywxODEuMDc1LDEyOC42NTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yODcuOTQxLDEzOC44Njh2LTMwLjYwNGMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjMsOS44MTQtMzkuMjMsMjEuOTE2djIwLjM4OQ0KCQljMCwwLDI1LjA5NiwxLjUyNSwzOS40MTUsMi44ODNDMjY0LjgwMiwxMzMuMDQyLDI4Ny45NDEsMTM4Ljg2OCwyODcuOTQxLDEzOC44Njh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='>

<div class='prop-value'></div>
</div>
<div class='col-md-4 col-sm-4 col-xs-4 text-center field'>
<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM5MC41NTcgMzkwLjU1NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkwLjU1NyAzOTAuNTU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTM4OS43NzIsMjQ4LjI5NmwtNDIuOTkxLTY4LjA2M1Y1NS4wMjhsLTE3LjUtMTcuNUg2MS4yNzVsLTE3LjUsMTcuNXYxMjUuMjA0TDAuNzg0LDI0OC4yOTYNCgkJSDM4OS43NzJ6IE0zMTEuNzgxLDcyLjUyOHY4Ny4zNjJjLTIyLjU1My01LjgzNC02MS41MTQtMTMuMDI4LTExNi41MDMtMTMuMDI4cy05My45NSw3LjE5NC0xMTYuNTAzLDEzLjAyOFY3Mi41MjhIMzExLjc4MXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMjMxRjIwOyIgcG9pbnRzPSIwLDI2OS44MzEgMCwzMDQuODMxIDQwLjc3OCwzMDQuODMxIDQwLjc3OCwzNTMuMDI4IDc1Ljc3OCwzNTMuMDI4IDc1Ljc3OCwzMDQuODMxIA0KCQkzMTQuNzc4LDMwNC44MzEgMzE0Ljc3OCwzNTMuMDI4IDM0OS43NzgsMzUzLjAyOCAzNDkuNzc4LDMwNC44MzEgMzkwLjU1NywzMDQuODMxIDM5MC41NTcsMjY5LjgzMSAJIi8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0xODEuMDc1LDEyOC42NTN2LTIwLjM4OWMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjI5LDkuODE0LTM5LjIyOSwyMS45MTZ2MzAuNjA0DQoJCWMwLDAsMjMuMTQtNS44MjYsMzkuMDQ1LTcuMzMyQzE1NS45OCwxMzAuMTc5LDE4MS4wNzUsMTI4LjY1MywxODEuMDc1LDEyOC42NTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yODcuOTQxLDEzOC44Njh2LTMwLjYwNGMwLTEyLjEwMi0xNy41NjQtMjEuOTE2LTM5LjIzLTIxLjkxNnMtMzkuMjMsOS44MTQtMzkuMjMsMjEuOTE2djIwLjM4OQ0KCQljMCwwLDI1LjA5NiwxLjUyNSwzOS40MTUsMi44ODNDMjY0LjgwMiwxMzMuMDQyLDI4Ny45NDEsMTM4Ljg2OCwyODcuOTQxLDEzOC44Njh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='>
<div class='prop-label'>Type</div>
<div class='prop-value'>
Cars
</div>
</div>
</div>
</div>
<div class='buttons'>
<div class='rent fake-btn'>
<b>{{ $car->selling_price }} $</b>
</div>
<a class="see-more fake-btn" href="{{ url('/car-details/'.$car->slug) }}">Read more</a>
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




































@include('layouts.footer')

@endsection