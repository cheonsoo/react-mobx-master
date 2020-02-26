function getCompanies(req, res) {
  const start = new Date().getTime();

  try {
    const data = [
      { id: 1, name: 'company1', desc: 'company1 desc' + Math.random() },
      { id: 2, name: 'company2', desc: 'company2 desc' + Math.random() },
      { id: 3, name: 'company3', desc: 'company3 desc' + Math.random() },
      { id: 4, name: 'company4', desc: 'company4 desc' + Math.random() },
      { id: 5, name: 'company5', desc: 'company5 desc' + Math.random() },
      { id: 6, name: 'company6', desc: 'company6 desc' + Math.random() },
      { id: 7, name: 'company7', desc: 'company7 desc' + Math.random() },
      { id: 8, name: 'company8', desc: 'company8 desc' + Math.random() },
      { id: 9, name: 'company9', desc: 'company9 desc' + Math.random() },
      { id: 10, name: 'company10', desc: 'company10 desc' + Math.random() }
    ];
    res.send({
      status: 500,
      data: data,
      found: 0,
      total: 0,
      msg: "internal server error",
      exe_time: new Date().getTime() - start
    });
  } catch (e) {
    console.log("internal server error", e.message);
    res.send({
      status: 500,
      data: [],
      found: 0,
      total: 0,
      msg: "internal server error",
      exe_time: new Date().getTime() - start
    });
  }
}

module.exports = {
  getCompanies
};