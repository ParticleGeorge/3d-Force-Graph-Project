// topology.js
// Defines our nodes (computers) and which ones talk to each other

export const nodes = [
    { id: "CompA", role: "client" },
    { id: "CompB", role: "server" },
    { id: "CompC", role: "server" },
    { id: "CompD", role: "client" },
    { id: "CompE", role: "server" }
];

// Each flow is a "conversation path" with a send rate (Hz)
export const flows = [
  // A -> B at 10 Hz
  {
    flowId: "CompA->CompB",
    sourceNode: "CompA",
    destNode: "CompB",
    rateHz: 10,
    protocol: "TCP",
  },

  // B -> C at 2 Hz
  {
    flowId: "CompB->CompC",
    sourceNode: "CompB",
    destNode: "CompC",
    rateHz: 2,
    protocol: "UDP",
  },

  // D -> B at 5 Hz
  {
    flowId: "CompD->CompB",
    sourceNode: "CompD",
    destNode: "CompB",
    rateHz: 5,
    protocol: "TCP",
  },

  // E -> A at 1 Hz
  {
    flowId: "CompE->CompA",
    sourceNode: "CompE",
    destNode: "CompA",
    rateHz: 1,
    protocol: "UDP",
  }
];