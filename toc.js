// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction/introduction.html">Introduction</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.</strong> Préliminaires</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="preliminaires/base_10.html"><strong aria-hidden="true">1.1.</strong> Base 10</a></li><li class="chapter-item expanded "><a href="preliminaires/base_2.html"><strong aria-hidden="true">1.2.</strong> Base 2</a></li><li class="chapter-item expanded "><a href="preliminaires/base_16.html"><strong aria-hidden="true">1.3.</strong> Base 16</a></li><li class="chapter-item expanded "><a href="preliminaires/bit_byte.html"><strong aria-hidden="true">1.4.</strong> Bit et octet</a></li><li class="chapter-item expanded "><a href="preliminaires/logic.html"><strong aria-hidden="true">1.5.</strong> Portes logiques</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Système</li><li class="chapter-item expanded "><a href="linux/systeme.html"><strong aria-hidden="true">2.</strong> Choix du système</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="linux/ubuntu.html"><strong aria-hidden="true">2.1.</strong> Ubuntu</a></li><li class="chapter-item expanded "><a href="linux/arch.html"><strong aria-hidden="true">2.2.</strong> Arch Linux</a></li><li class="chapter-item expanded "><a href="linux/manjaro.html"><strong aria-hidden="true">2.3.</strong> Manjaro</a></li><li class="chapter-item expanded "><a href="linux/fedora.html"><strong aria-hidden="true">2.4.</strong> Fedora</a></li><li class="chapter-item expanded "><a href="linux/nixos.html"><strong aria-hidden="true">2.5.</strong> NixOS</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Shell</li><li class="chapter-item expanded "><a href="shell/introduction.html"><strong aria-hidden="true">3.</strong> Shell</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/usage.html"><strong aria-hidden="true">3.1.</strong> Utilisation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/deplacements.html"><strong aria-hidden="true">3.1.1.</strong> Se déplacer</a></li><li class="chapter-item expanded "><a href="shell/rtfm.html"><strong aria-hidden="true">3.1.2.</strong> RTFM : Read The Fucking Manual</a></li><li class="chapter-item expanded "><a href="shell/read_write_files.html"><strong aria-hidden="true">3.1.3.</strong> Lire et écrire dans des fichiers</a></li><li class="chapter-item expanded "><a href="shell/permissions.html"><strong aria-hidden="true">3.1.4.</strong> Permissions</a></li><li class="chapter-item expanded "><a href="shell/tips_tricks.html"><strong aria-hidden="true">3.1.5.</strong> Tips and tricks</a></li></ol></li><li class="chapter-item expanded "><a href="shell/editors.html"><strong aria-hidden="true">3.2.</strong> Editeurs de texte</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/vscode.html"><strong aria-hidden="true">3.2.1.</strong> VSCode</a></li><li class="chapter-item expanded "><a href="shell/vim.html"><strong aria-hidden="true">3.2.2.</strong> Vim</a></li></ol></li><li class="chapter-item expanded "><a href="shell/run_command.html"><strong aria-hidden="true">3.3.</strong> Run Command</a></li><li class="chapter-item expanded "><a href="shell/wm.html"><strong aria-hidden="true">3.4.</strong> Window Manager</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/awesome.html"><strong aria-hidden="true">3.4.1.</strong> Awesome</a></li></ol></li><li class="chapter-item expanded "><a href="shell/shell.html"><strong aria-hidden="true">3.5.</strong> Programmation Shell</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/flux.html"><strong aria-hidden="true">3.5.1.</strong> Flux systèmes</a></li><li class="chapter-item expanded "><a href="shell/job_control.html"><strong aria-hidden="true">3.5.2.</strong> Job control</a></li><li class="chapter-item expanded "><a href="shell/scripts.html"><strong aria-hidden="true">3.5.3.</strong> Scripts</a></li><li class="chapter-item expanded "><a href="shell/variable.html"><strong aria-hidden="true">3.5.4.</strong> Variables</a></li><li class="chapter-item expanded "><a href="shell/maths.html"><strong aria-hidden="true">3.5.5.</strong> Mathématiques</a></li><li class="chapter-item expanded "><a href="shell/env.html"><strong aria-hidden="true">3.5.6.</strong> Variables d&#39;environnement</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shell/path.html"><strong aria-hidden="true">3.5.6.1.</strong> PATH</a></li></ol></li><li class="chapter-item expanded "><a href="shell/quotting.html"><strong aria-hidden="true">3.5.7.</strong> Quotting</a></li><li class="chapter-item expanded "><a href="shell/tests.html"><strong aria-hidden="true">3.5.8.</strong> Tests et conditions</a></li><li class="chapter-item expanded "><a href="shell/loops.html"><strong aria-hidden="true">3.5.9.</strong> Boucles</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">Git</li><li class="chapter-item expanded "><a href="git/introduction.html"><strong aria-hidden="true">4.</strong> Git</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="git/bases.html"><strong aria-hidden="true">4.1.</strong> Commandes de bases</a></li><li class="chapter-item expanded "><a href="git/github.html"><strong aria-hidden="true">4.2.</strong> Cas pratique avec GitHub</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Langage C</li><li class="chapter-item expanded "><a href="c/introduction.html"><strong aria-hidden="true">5.</strong> Langage C</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="c/abecedaire.html"><strong aria-hidden="true">5.1.</strong> Abécédaire</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="c/compilation_test.html"><strong aria-hidden="true">5.1.1.</strong> Compilation de test</a></li><li class="chapter-item expanded "><a href="c/main.html"><strong aria-hidden="true">5.1.2.</strong> La fonction main et l&#39;environnement de développement</a></li><li class="chapter-item expanded "><a href="c/types.html"><strong aria-hidden="true">5.1.3.</strong> Types prédéfinis</a></li><li class="chapter-item expanded "><a href="c/functions.html"><strong aria-hidden="true">5.1.4.</strong> Fonctions</a></li><li class="chapter-item expanded "><a href="c/maths.html"><strong aria-hidden="true">5.1.5.</strong> Mathématiques</a></li><li class="chapter-item expanded "><a href="c/if_else_switch.html"><strong aria-hidden="true">5.1.6.</strong> Structures de contrôles</a></li><li class="chapter-item expanded "><a href="c/arrays.html"><strong aria-hidden="true">5.1.7.</strong> Tableaux</a></li><li class="chapter-item expanded "><a href="c/string.html"><strong aria-hidden="true">5.1.8.</strong> Chaîne de caractères</a></li><li class="chapter-item expanded "><a href="c/pointers.html"><strong aria-hidden="true">5.1.9.</strong> Pointeurs</a></li><li class="chapter-item expanded "><a href="c/loops.html"><strong aria-hidden="true">5.1.10.</strong> Boucles</a></li><li class="chapter-item expanded "><a href="c/exercises.html"><strong aria-hidden="true">5.1.11.</strong> Exercices</a></li><li class="chapter-item expanded "><a href="c/corrections.html"><strong aria-hidden="true">5.1.12.</strong> Corrections</a></li><li class="chapter-item expanded "><a href="c/struct.html"><strong aria-hidden="true">5.1.13.</strong> Structures de données</a></li></ol></li><li class="chapter-item expanded "><a href="c/advanced_notions.html"><strong aria-hidden="true">5.2.</strong> Notions avancées</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="c/compilation_flags.html"><strong aria-hidden="true">5.2.1.</strong> Flags de compilation</a></li><li class="chapter-item expanded "><a href="c/multiple_files.html"><strong aria-hidden="true">5.2.2.</strong> Plusieurs fichiers</a></li><li class="chapter-item expanded "><a href="c/makefile.html"><strong aria-hidden="true">5.2.3.</strong> Makefile</a></li><li class="chapter-item expanded "><a href="c/recursive.html"><strong aria-hidden="true">5.2.4.</strong> Récursivité</a></li><li class="chapter-item expanded "><a href="c/advanced_pointers.html"><strong aria-hidden="true">5.2.5.</strong> Pointeurs avancés</a></li><li class="chapter-item expanded "><a href="c/memory.html"><strong aria-hidden="true">5.2.6.</strong> Mémoire</a></li><li class="chapter-item expanded "><a href="c/linked_lists.html"><strong aria-hidden="true">5.2.7.</strong> Listes chainées</a></li><li class="chapter-item expanded "><a href="c/gdb.html"><strong aria-hidden="true">5.2.8.</strong> GDB</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">TODO: Assembleur</li><li class="chapter-item expanded "><a href="asm/introduction.html"><strong aria-hidden="true">6.</strong> Assembleur</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="misc/authors.html">Auteurs</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
