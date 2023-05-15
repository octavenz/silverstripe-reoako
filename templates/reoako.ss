<link
    rel="stylesheet"
    type="text/css"
    href="$resourceURL('silverstripe/admin:client/dist/styles/bundle.css')"
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
                        <label style="min-width: 50%">
                            <input
                                id="Form_reoakoInput"
                                name="search_term"
                                type="text"
                                class="text insert-embed-reoako form-control"
                                value="$search_term"
                            >
                        </label>
                        <input
                            type="submit"
                            value="Search"
                            class="btn btn-primary"
                        >
                    </div>
                </div>
                <% if $error %>
                    <div class="form__field-description">
                        Reoako Error: "$error"
                    </div>
                <% end_if %>
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

            </fieldset>
        </form>
    </div>
</div>
