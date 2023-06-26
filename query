<script runat="server">
  Platform.Load("Core", "1.1.1");
  var prox = new Script.Util.WSProxy();

  var queryDefRows = QueryDefinition.Retrieve({
    Property: "Name",
    SimpleOperator: "like",
    Value: "%interest%",
    Properties: ["CustomerKey", "ObjectID"]
  });

  if (queryDefRows && queryDefRows.length > 0) {
    for (var i = 0; i < queryDefRows.length; i++) {
      var queryDef = queryDefRows[i];
      var deleteResult = prox.deleteItem("QueryDefinition", { ObjectID: queryDef.ObjectID });
      Write("Deletion Status: " + deleteResult.Results[0].StatusCode + "<br>");
    }
  } else {
    Write("No query activities found.");
  }
</script>
