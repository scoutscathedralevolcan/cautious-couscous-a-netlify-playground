---
layout: default
---

<div class="home">

    {% for navscroll_hash in site.data.sitemenu.scrollnav %}
        {% for navscroll_item in navscroll_hash %}
        {% if navscroll_item[0] != "hidden" %}
        <!-- {{ navscroll_item[0] }} Section -->
        {% endif %}
        {% if sectionbgcolor == site.data.colors.section-a-background %}
            {% assign sectionbgcolor = site.data.colors.section-b-background %}
        {% else %}
            {% assign sectionbgcolor = site.data.colors.section-a-background %}
        {% endif %}
    <section id="{{ navscroll_item[1] }}" style="background-color:{{sectionbgcolor}};">
        <div class="container">
        {% if navscroll_item[0] != "hidden" %}
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">{{ navscroll_item[0] }}</h2>
                    <h3 class="section-subheading"></h3>
                </div>
            </div>
        {% endif %}
            <div class="row">
                <div class="col-lg-12 text-justify">
            {% capture includescrollelement %}home-section/{{ navscroll_item[1] }}.md{% endcapture %}
            {% capture pagecaptured %}{% include {{ includescrollelement }} %} {% endcapture %}
            {{ pagecaptured | markdownify }}
                </div>
            </div>
        </div>
    </section>
        {% endfor %}
    {% endfor %}


  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
