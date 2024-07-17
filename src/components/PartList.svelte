<script>
    export let parts = [];
  </script>
  
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 0.5rem;
      border: 1px solid #ddd;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
  </style>
  
  <table>
    <thead>
      <tr>
        <th>Part ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each parts as part}
        <tr>
          <td>{part.id}</td>
          <td>{part.name}</td>
          <td>{part.description}</td>
          <td>{part.quantity}</td>
          <td>
            <!-- Add edit and delete functionality here -->
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  