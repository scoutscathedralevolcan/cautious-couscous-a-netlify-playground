---
layout: default
---

<div class="home">
    {% for navscroll_item in site.data.sitemenu.scrollnav %}
        {% if navscroll_item.label != "hidden" %}
        <!-- {{ navscroll_item.label }} Section -->
        {% endif %}
        {% if sectionbgcolor == site.data.colors.section-a-background %}
            {% assign sectionbgcolor = site.data.colors.section-b-background %}
        {% else %}
            {% assign sectionbgcolor = site.data.colors.section-a-background %}
        {% endif %}
    <section id="{{ navscroll_item.path }}" style="background-color:{{sectionbgcolor}};">
        <div class="container">
        {% if navscroll_item.label != "hidden" %}
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">{{ navscroll_item.label }}</h2>
                    <h3 class="section-subheading"></h3>
                </div>
            </div>
        {% endif %}
            <div class="row">
                <div class="col-lg-12 text-justify">
            {% capture includescrollelement %}home-section/{{ navscroll_item.path }}.md{% endcapture %}
            {% capture pagecaptured %}{% include {{ includescrollelement }} %} {% endcapture %}
            {{ pagecaptured | markdownify }}
                </div>
            </div>
        </div>
    </section>
    {% endfor %}


  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
