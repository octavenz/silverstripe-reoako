ajax

<% if $results %>
    <% with $results %>
    <h2 role="alert">
            There is {{ $count }} result for "{{ $search_term }}"
    </h2>
    <% end_with %>
<% end_if %>

<% if $error_message %>
    <p class="help-block help-warning">
        There is a problem connecting to Reoako. {{ $error_message }}.
    </p>
<% end_if %>


<% if $results %>
    <% include results %>
<% end_if %>
