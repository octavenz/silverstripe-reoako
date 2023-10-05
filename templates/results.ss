<% if $count == 1 %>
    <h3 class="result-header form__field-description" style="padding-top: 4px;">There is 1 result for "$search_term"</h3>
<% else %>
    <h3 class="result-header form__field-description" style="padding-top: 4px;">There are $count results for "$search_term"</h3>
<% end_if %>

<table class="table grid-field__table">
    <thead>
        <tr class="table-headers">
            <th>Term</th>
            <th>Function</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <% if $results %> <% loop $results %> <% loop $translations %>
        <tr data-page-title="Title">
            <td class="title">
                <div class="title-wrapper">
                    <a
                        class="choose-word"
                        href="#$slug"
                        data-reoako-id="$slug"
                        data-reoako-headword="$Up.headword"
                        data-reoako-translation="$mi"
                    >
                        <strong>$mi</strong>
                        <br />
                        <span>$en</span>
                    </a>
                </div>
            </td>
            <td>$Up.function</td>
            <td>$Up.definition</td>
        </tr>
        <% end_loop %> <% end_loop %> <% end_if %>
    </tbody>
</table>

<script type="text/javascript">
    //Hacky iframe parent JQuery js
    var $ = window.parent.jQuery;
    var editor = window.parent._activeEditor;
    var dialog = window.parent._activeDialog;

    if (editor) {
        var initialSelection = editor.selection;
        var range = editor.selection.getRng();
        var nothingSelected = range.startOffset === range.endOffset;
        var isAtEndOfSelection = range?.startContainer?.innerText?.length === range.endOffset;

        $(".choose-word", document).on("click", (e) => {
            var translation = e.currentTarget.getAttribute(
                "data-reoako-translation"
            );
            var id = e.currentTarget.getAttribute("data-reoako-id");
            var headword = document.getElementById('Form_reoakoInput').value;
            var firstChar = headword.charAt(0);
            if (firstChar == firstChar.toUpperCase()) {
                translation = translation.charAt(0).toUpperCase() + translation.slice(1);
            }

            let constructed_shortcode =
                '[reoako data-reoako-headword="' +
                headword +
                '" data-reoako-id="' +
                id +
                '" data-reoako-translation="' +
                translation +
                '"]';

            if(isAtEndOfSelection){
                constructed_shortcode += '&nbsp;';
            }
            editor.insertContent(constructed_shortcode);
            dialog.close();
        });

        // Close window
        $(".close", document).on("click", (e) => {
            dialog.close();
        });

    }
</script>
