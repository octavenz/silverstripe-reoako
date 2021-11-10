<link
    rel="stylesheet"
    type="text/css"
    href="/resources/vendor/silverstripe/admin/client/dist/styles/bundle.css"
/>

<div class="modal-content">
    <div class="asset-admin">
        <form id="Form_reoakoForm" action="/reoako-modal/search">
            <fieldset class="modal-body modal__dialog">
                <div
                    id="Form_reoako_Holder"
                    class="field text insert-embed-reoako form-group"
                >
                    <div class="form__field-holder">
                        <input
                            id="Form_reoakoInput"
                            name="search_term"
                            type="text"
                            class="text insert-embed-reoako form-control"
                            value="$search_term"
                        />
                    </div>
                </div>
                <% if $error %>
                    <div class="form__field-description">
                        Reoako Error: "$error"
                    </div>
                <% end_if %>
                <% if !$error %>
                    <% if $results %>
                        <% include results results=$results %>
                    <% else_if $search_term %>
                        <div class="form__field-description">
                            There are 0 results for "$search_term"
                        </div>
                    <% else %>
                        <div class="form__field-description">
                            Search for a word in Māori or English to continue.
                        </div>
                    <% end_if %>
                <% end_if %>

            </fieldset>
        </form>
    </div>
</div>
