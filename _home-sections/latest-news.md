---
section-title: "Nouvelles"
section-id: "latest-news"
weight: 6
show: true
show-in-menu: true
---

<div class="row">
{% for post in site.posts limit: site.data.general-settings.pagination-post-on-home-page %}
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a href="{{ post.url }}">
            <h2>{{ post.title }}</h2>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} - {{ post.author }}</span>
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            {% if post.header-img %}
            <img src="{{ post.header-img | prepend: site.baseurl }}" class="img-responsive img-centered" alt="">
            {% else %}
                <p>{{ post.content | truncatewords:30 | strip_html }}</p>
            {% endif %}
        </a>
        <div class="portfolio-caption">
            <p class="text-muted">{{ post.subtitle }}</p>
        </div>
    </div>
{% endfor %}
</div>

<p class="rss-subscribe">Suivez nos dernière nouvelles <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
