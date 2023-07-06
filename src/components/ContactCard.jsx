const ContactCard = ({ contacts, OndeleteContact }) => {
  const update = (e) => {};

  const Delete = (e) => {
    const deletecontacts = JSON.parse(localStorage.getItem("contact"));
    const filterthedata = deletecontacts.filter((data) => {
      if (data.id != e.target.value) {
        return data;
      }
    });

    localStorage.setItem("contact", JSON.stringify(filterthedata));
    OndeleteContact(JSON.parse(localStorage.getItem("contact")));
  };
  return (
    <>
      <div className="container">
        <div className="row shadow">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SI/NO</th>
                <th>Name</th>
                <th>Phone</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td className="text-center" colSpan={2}>
                    No Contacts Found
                  </td>
                </tr>
              ) : (
                contacts.map((e, index) => {
                  let i = 0;
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{e.name}</td>
                      <td>{e.phone}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={update}
                          value={e.id}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={Delete}
                          value={e.id}
                          className="btn btn-danger"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
