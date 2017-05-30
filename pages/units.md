---
layout: unit-page
title: Nos unités
permalink: /units/
---

{% for unitpage in site.units %}
<div class="row unit-presentation">
    <a class="unit-presentation-link" href="{{unitpage.permalink}}">
        <div class="unit-presentation-icon">
            <img src="{{unitpage.insigne}}" />
        </div>
        <div>
            <h2>{{unitpage.title}}</h2>
            <h3>Unité {{unitpage.short}} ans</h3>
            <p>{{unitpage.description}}</p>
        </div>
    </a>
</div>
{% endfor %}
