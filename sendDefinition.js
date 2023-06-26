<script runat="server">
  Platform.Load("Core", "1.1.1");
  var prox = new Script.Util.WSProxy();

  var sendDefRows = Send.Definition.Retrieve({
    Property: "Name",
    SimpleOperator: "like",
    Value: "%welcome%",
    Properties: ["CustomerKey", "ObjectID"]
  });

  if (sendDefRows && sendDefRows.length > 0) {
    for (var i = 0; i < sendDefRows.length; i++) {
      var sendDef = sendDefRows[i];
      Write("Send Definition #" + (i + 1) + ":<br>");
      Write("Name: " + sendDef.Name + "<br>");
      Write("CustomerKey: " + sendDef.CustomerKey + "<br>");
      Write("ObjectID: " + sendDef.ObjectID + "<br>");
      var deleteResult = prox.deleteItem("SendDefinition", { ObjectID: sendDef.ObjectID });
      Write("Deletion Status: " + deleteResult.Results[0].StatusCode + "<br>");
    }
  } else {
    Write("No send definitions found.");
  }
</script>
