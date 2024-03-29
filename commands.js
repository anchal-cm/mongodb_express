db.departments.insertMany([
  {
    name: "sales",
    people: 10,
  },
  {
    name: "backend",
    people: 15,
  },
]);

db.departments.updateOne(
  {
    name: "sales",
  },
  {
    $set: {
      people: 20,
    },
  }
);

db.departments.updateMany(
  { people: { $gt: 10 } },
  {
    $set: { location: "tokyo" },
  }
);

db.departments.replaceOne({ name: "sales" }, { name: "design", people: 8 });

db.departments.deleteMany();

db.departments.deleteMany({ location: "tokyo" });

db.departments.deleteOne({ name: "design" });
