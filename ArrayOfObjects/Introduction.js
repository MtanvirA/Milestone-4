let infos = [
  { name: "Tanvir", district: "Cumilla", CGPA: 3.87 },
  { name: "Samin", district: "Kishoreganj", CGPA: 3.92 },
  { name: "Azam", district: "Rangpur", CGPA: 3.13 },
];

for (let i = 0; i < infos.length; i++) {
  console.log(infos[i]);
}

for (let info of infos) {
  let name = info.name;
  let print = name + "--> " + info.CGPA;
  console.log(print);
}
