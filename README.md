webhelp-expander
================

Expands the sidebar ToC to show the open document (and its immediate children). For use with DocBook WebHelp and webhelp-fast.xsl.

Dependencies
------------

The script requires jQuery. DocBook WebHelp adds it already; you only have to make sure you invoke webhelp-expander in your HTML after the jQuery library.

Background
-----------

DocBook webhelp generates a ToC for its sidepanel for every HTML chunk separately. While this allows insertion of unique tracking IDs for all pages, it also slows down the build process a lot.

To speed builds up, a customization was published by Maxime Bégnis on the docbook-apps messaging list:
https://lists.oasis-open.org/archives/docbook-apps/201310/msg00003.html

This webhelp-fast.xsl generates the ToC in one run, and includes that for all chunks, but for us, it lost the ability to track and open the currently active chunk on the sidebar when the reader navigates the chapters using the Previous / Next controls.

Solution
--------

This is a small jQuery script that takes the URL of the active page, and tags the corresponding link on the sidebar. If there's a match (as there should be, unless you have opened a chunk that was, for some reason, not included in your table of contents), it travels up the sidebar from the link, firing a "click" event on the expandable [+] divs in its path.

Known issues
------------

The script does not collapse ToC branches that are no longer relevant. It might be of use to see which parts of the document were visited before, so we decided to not pursue auto-collapsing. You might want to add a command to fire a click event on all expanded [+] divs that are not siblings-of-parents-of-the-active-link.

I'm also very new to Javascript, so there might be a faster and more convenient way to achieve the same goal.

Check it out at
------------------

You can find a working example of the script (as treefix.js) here:
https://www.balabit.com/sites/default/files/documents/scb-4.0-guides/en/scb-v4.0-guide-admin/html/index.html

Use the navbar controls, or scroll down a bit for the table of contents to jump deeper into the document and see the sidebar open :)
