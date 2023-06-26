<script runat="server">
  Platform.Load("Core", "1.1.1");
  var prox = new Script.Util.WSProxy();

  var filterDefRows = FilterDefinition.Retrieve({
    Property: "Name",
    SimpleOperator: "like",
    Value: "%balance%",
    Properties: ["CustomerKey", "ObjectID"]
  });

  if (filterDefRows && filterDefRows.length > 0) {
    for (var i = 0; i < filterDefRows.length; i++) {
      var filterDef = filterDefRows[i];
      Write("Filter Definition #" + (i + 1) + ":<br>");
      Write("Name: " + filterDef.Name + "<br>");
      Write("CustomerKey: " + filterDef.CustomerKey + "<br>");
      Write("ObjectID: " + filterDef.ObjectID + "<br>");
      var deleteResult = prox.deleteItem("FilterDefinition", { ObjectID: filterDef.ObjectID });
      Write("Deletion Status: " + deleteResult.Results[0].StatusCode + "<br>");
    }
  } else {
    Write("No filter definitions found.");
  }
</script>
