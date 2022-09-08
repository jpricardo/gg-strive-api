# Strive API
REST API for Guilty Gear Strive framedata


# API Reference

## Auth

### Login

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/auth/login</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>POST</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Initiates a session</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td>-</td>
</tr>

</tbody>
</table>

### Get Current User

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/auth</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>GET</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Gets json data about the current active user</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td>-</td>
</tr>

</tbody>
</table>

### Create Character

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/api/v1/characters</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>POST</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Creates a new character</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td>-</td>
</tr>

</tbody>
</table>

## Characters

### Get Characters

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/api/v1/characters</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>GET</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Returns json data about all characters</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td>-</td>
</tr>

</tbody>
</table>

### Create Character

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/api/v1/characters</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>POST</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Creates a new character</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td>-</td>
</tr>

</tbody>
</table>


### Get Character

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/api/v1/characters/:name</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>GET</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Returns json data about a single character</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td><code>name=[string]</code></td>
</tr>

</tbody>
</table>


### Update Character

<table>
<thead>

<tr><th colspan=2>Request</th></tr>

</thead>
<tbody>

<tr>
<th scope='row'>URL</th>
<td>/api/v1/characters/:name</td>
</tr>

<tr>
<th scope='row'>Method</th>
<td><code>PATCH</code></td>
</tr>


<tr>
<th scope='row'>Description</th>
<td>Updates a single character's data</td>
</tr>

<tr>
<th scope='row'>URL Params</th>
<td><code>name=[string]</code></td>
</tr>

</tbody>
</table>


