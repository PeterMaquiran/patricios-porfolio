export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#competencias", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#formacao", label: "Formação" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const services = [
  {
    index: "01",
    title: "Network Engineering",
    text: "Routing, switching, VLANs, OSPF e a infraestrutura de redes corporativas.",
    icon: "network",
  },
  {
    index: "02",
    title: "Network Security",
    text: "FortiGate, ACLs, VPN, políticas de segurança e controlo de tráfego.",
    icon: "shield",
  },
  {
    index: "03",
    title: "Troubleshooting",
    text: "Diagnóstico de conectividade, DNS, rotas e análise de tráfego.",
    icon: "diagnostics",
  },
  {
    index: "04",
    title: "Formação técnica",
    text: "Formação CCNA e fundamentos de redes, com laboratório e foco na prática.",
    icon: "training",
  },
] as const;

export const projects = [
  {
    index: "01",
    title: "Troubleshooting e implementação em FortiGate",
    text: "Resolução de problemas de conectividade, criação de políticas de ida e volta, rotas e rotas de retorno.",
    tags: ["FortiGate", "Firewall", "Troubleshooting"],
    icon: "firewall",
  },
  {
    index: "02",
    title: "Interligação de redes L3",
    text: "Rede de trânsito entre routers, com foco em roteamento e conectividade entre sites.",
    tags: ["Cisco IOS", "Routing", "WAN"],
    icon: "routing",
  },
  {
    index: "03",
    title: "Segmentação de rede com VLANs",
    text: "Criação de VLANs, trunking, inter-VLAN routing e políticas de acesso.",
    tags: ["Switching", "VLAN", "ACL"],
    icon: "vlan",
  },
  {
    index: "04",
    title: "Troubleshooting de DNS",
    text: "Análise e resolução de falhas na resolução de nomes através de um provedor.",
    tags: ["DNS", "Diagnóstico", "Redes"],
    icon: "dns",
  },
] as const;

export const certifications = [
  {
    src: "/media/ccna.jpeg",
    name: "CCNA",
    issuer: "Cisco",
    alt: "Distintivo Cisco Certified CCNA",
  },
  {
    src: "/media/ccna-cyber.jpeg",
    name: "CCNA Cybersecurity",
    issuer: "Cisco",
    alt: "Distintivo Cisco Certified CCNA Cybersecurity",
  },
  {
    src: "/media/comptia.jpeg",
    name: "Network+",
    issuer: "CompTIA",
    alt: "Distintivo CompTIA Network+ Certified",
  },
  {
    src: "/media/jncia.jpeg",
    name: "JNCIA-Junos",
    issuer: "Juniper",
    alt: "Distintivo Juniper JNCIA-Junos Associate",
  },
  {
    src: "/media/hcia.jpeg",
    name: "HCIA",
    issuer: "Huawei",
    alt: "Distintivo Huawei Certified HCIA",
  },
  {
    src: "/media/fortinet-secops.jpeg",
    name: "Security Operations",
    issuer: "Fortinet Certified Professional",
    alt: "Distintivo Fortinet Certified Professional Security Operations",
  },
  {
    src: "/media/nse4.jpeg",
    name: "NSE 4",
    issuer: "FortiOS",
    alt: "Distintivo Fortinet NSE 4 FortiOS",
  },
  {
    src: "/media/nse5.jpeg",
    name: "NSE 5",
    issuer: "Security Operations",
    alt: "Distintivo Fortinet NSE 5 Security Operations",
  },
  {
    src: "/media/nse6.jpeg",
    name: "NSE 6",
    issuer: "Secure Networking",
    alt: "Distintivo Fortinet NSE 6 Secure Networking",
  },
] as const;

const dashboardIcons =
  "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons";

export const platforms = [
  { name: "Cisco IOS", icon: `${dashboardIcons}/svg/cisco.svg` },
  { name: "FortiOS", icon: `${dashboardIcons}/svg/fortinet.svg` },
  { name: "Junos", icon: `${dashboardIcons}/png/juniper-networks.png` },
  { name: "VRP", icon: `${dashboardIcons}/svg/huawei.svg` },
  { name: "EVE-NG", icon: "/icons/eve-ng.png" },
  {
    name: "GNS3",
    icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/gns3.svg",
  },
  { name: "Packet Tracer", icon: "/icons/packet-tracer.svg" },
  { name: "Wireshark", icon: `${dashboardIcons}/png/wireshark.png` },
  { name: "Linux", icon: `${dashboardIcons}/svg/linux.svg` },
  { name: "draw.io", icon: `${dashboardIcons}/svg/draw-io.svg` },
] as const;

export const gallery = [
  {
    src: "/media/lab-teaching.jpeg",
    width: 3024,
    height: 4032,
    alt: "Patrício Luís a indicar um diagrama de trunk num quadro, durante um laboratório de switching.",
    caption: "Laboratório de switching",
    detail: "Trunk, VLANs e topologia no quadro.",
    className: "md:col-span-7 md:row-span-2 min-h-[460px] md:min-h-[640px]",
    position: "object-[center_30%]",
  },
  {
    src: "/media/class-group.jpeg",
    width: 3088,
    height: 2316,
    alt: "Turma de CCNA reunida na sala de formação, à frente de um ecrã com uma topologia de rede.",
    caption: "Turma de CCNA",
    detail: "Encerramento em sala.",
    className: "md:col-span-5 min-h-[280px]",
    position: "object-[center_35%]",
  },
  {
    src: "/media/class-group-2.jpeg",
    width: 3088,
    height: 2316,
    alt: "A mesma turma de CCNA numa segunda fotografia de grupo, na sala da Velonet Academy.",
    caption: "Velonet Academy",
    detail: "Formandos da turma.",
    className: "md:col-span-5 min-h-[280px]",
    position: "object-[center_30%]",
  },
  {
    src: "/media/lab-session.jpeg",
    width: 3024,
    height: 4032,
    alt: "Sessão prática com portáteis, consolas de switch e um formando a acompanhar a explicação.",
    caption: "Sessão prática",
    detail: "Consola, laboratório e equipamento real.",
    className: "md:col-span-5 aspect-[3/4]",
    position: "object-[center_25%]",
  },
  {
    src: "/media/ccna-poster.jpeg",
    width: 1206,
    height: 1913,
    alt: "Cartaz da Velonet Academy a celebrar a conclusão da turma de CCNA.",
    caption: "Turma concluída",
    detail: "Celebramos uma nova conquista.",
    className: "md:col-span-7",
    position: "object-contain",
    poster: true,
  },
] as const;

export const contact = {
  email: "patricio.luis@email.com",
  linkedin: "https://linkedin.com/in/patricio-luis",
  linkedinLabel: "linkedin.com/in/patricio-luis",
  phone: "+244 9XX XXX XXX",
  location: "Angola",
} as const;
