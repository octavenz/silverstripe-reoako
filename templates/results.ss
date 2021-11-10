<% if $count == 1 %>
    <h3 class="result-header">There is 1 result for "$search_term"</h3>
<% else %>
    <h3 class="result-header">There are $count result for "$search_term"</h3>
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
    var reoakoInstance = window.parent._reoako;

    if (reoakoInstance) {
        var editor = reoakoInstance.features.editor;

        $(".choose-word", document).on("click", (e) => {
            // console.log(e.currentTarget);

            var translation = e.currentTarget.getAttribute(
                "data-reoako-translation"
            );
            var id = e.currentTarget.getAttribute("data-reoako-id");
            var headword = e.currentTarget.getAttribute("data-reoako-headword");
            var word = e.currentTarget.getAttribute("data-reoako-translation");

            console.log([translation, id, headword, word]);

            let constructed_shortcode =
                ' [reoako data-reoako-headword="' +
                headword +
                '" data-reoako-id="' +
                id +
                '" data-reoako-translation="' +
                translation +
                '"] ';

            console.log(constructed_shortcode);
            editor.insertContent(constructed_shortcode);
            reoakoInstance.close();
        });

        // Close window
        $(".close", document).on("click", (e) => {
            reoakoInstance.close();
        });

        // Auto refresh TODO: (replace with ajax)
        $("#Form_reoakoInput", document).keyup(() => {
            $("#Form_reoakoForm", document).trigger("submit");
        });
    }
</script>
