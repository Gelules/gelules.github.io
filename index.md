---
title: Gélules
---

## Gélules

Le sujet principal de ce site repose sur des articles spécialisés sur de la simple programmation, en étant le plus minimaliste possible.

C'est du dév sur Unix : scripts Shell, C, ...

{% for post in site.posts %}
* {{ post.date | date_to_string }} [{{ post.title }}]({{ post.url }})
{% endfor %}
