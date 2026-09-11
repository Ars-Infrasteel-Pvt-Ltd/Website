import { DataCenterProduct } from "@/types/datacenter";

export const dataCenterProducts: DataCenterProduct[] = [
  {
    id: "DC.01",
    slug: "integrated-cabinet-ups",
    name: "Integrated Cabinet & UPS Systems",
    description:
      "Intelligent integrated server racks with in-built power distribution, outdoor cabinets, precision air conditioning and UPS systems for turnkey server room deployments.",
    specs: [
      { label: "Configurations", value: "Single to One-to-Four" },
      { label: "UPS Range", value: "1–10 KVA" },
      { label: "Rating", value: "Indoor & Outdoor" },
    ],
  },
  {
    id: "DC.02",
    slug: "electromagnetic-shielding-cabinet",
    name: "Electromagnetic Shielding Cabinets",
    description:
      "Shielded server cabinets and shielded desktop/table units engineered to block electromagnetic interference, available in multiple heights and footprints.",
    specs: [
      { label: "Height Range", value: "14U – 42U" },
      { label: "Footprints", value: "700×700 / 700×980" },
      { label: "Locking", value: "Combination & Non-Locking" },
    ],
  },
  {
    id: "DC.03",
    slug: "micro-module-channel",
    name: "Micro-Module Data Center Channels",
    description:
      "Prefabricated micro-module data center aisles and integrated racks with in-row cooling, built for rapid, scalable data center deployment.",
    specs: [
      { label: "Layout", value: "Single-Row & Double-Row" },
      { label: "Capacity", value: "4 – 24 Racks" },
      { label: "Cooling", value: "In-Row AC, Cold Aisle" },
    ],
  },
  {
    id: "DC.04",
    slug: "pdu-smart-pdu",
    name: "PDU & Smart PDU",
    description:
      "IP-based and RS485 remote intelligent PDUs with distributed control, plus standard multi-port PDUs with surge protection, in 8 to 32-position configurations.",
    specs: [
      { label: "Positions", value: "8 – 32" },
      { label: "Control", value: "IP & RS485" },
      { label: "Protection", value: "Integrated Surge" },
    ],
  },
  {
    id: "DC.05",
    slug: "kvm-digital-kvm",
    name: "KVM & Digital KVM Switches",
    description:
      "Digital and analog KVM switches with remote port expansion, VGA/HDMI/network interfaces, for centralized server and rack access management.",
    specs: [
      { label: "Ports", value: "4 – 32" },
      { label: "Interfaces", value: "VGA, HDMI, Network" },
      { label: "Access", value: "Remote IP-Based" },
    ],
  },
  {
    id: "DC.06",
    slug: "structured-cabling",
    name: "Structured Cabling",
    description:
      "Fiber and copper patch cords, network cables, ODFs, patch panels and modular network panels for structured cabling in data centers and network rooms.",
    specs: [
      { label: "Fiber", value: "Single-Mode Patch Cords" },
      { label: "Copper", value: "Cat5e / Cat6 / Cat6A" },
      { label: "ODF", value: "12 – 144 Core" },
    ],
  },
  {
    id: "DC.07",
    slug: "server-rack",
    name: "Server Racks",
    description:
      "42U, 32U, 22U, 20U and 12U server and network racks in multiple footprints, plus wall-mounted mini racks for compact deployments.",
    specs: [
      { label: "Height Range", value: "12U – 42U" },
      { label: "Footprints", value: "600×600 – 800×1000" },
      { label: "Formats", value: "Server, Network, Wall-Mount" },
    ],
  },
];