import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import modalA from "./modal";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import keywordscomponenet from "./sidebar/keywordscomponenet";

function App() {
  var htmldata = "";
  var robotdata = "";

  const [showModal, setShowModal] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const toggle = () => {
    console.log("Toggle called");
    setShowModal(!showModal);
  };
  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  const [message, setMessage] = React.useState("");
  const drag = (ev) => {
    setMessage(ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    var id = ev.target.id;
    var data = message;
    // $("#" + id).append(`<input type="text" name="test">`);
    dragelement(id, data);
  };

  // const body1 = ()=>{
  //   return(
  //     <div class="container-fluid">
  //   <div class="row">
  //     <div class="form-group">
  //       <label for="checkboxname">Name</label>
  //       <input type="text" id="checkboxname" class="form-control" placeholder="Name"/>
  //     </div>
  //     <div class="form-group">
  //       <label for="checkboxlabel">Label</label>
  //       <input type="text" id="checkboxlabel" class="form-control" placeholder="Label"/>
  //     </div>
  //     <div class="form-group">
  //       <label for="checkboxdefault">Default</label>
  //       <input type="text" id="checkboxdefault" class="form-control" placeholder="Default"/>
  //     </div>
  //     <button onclick="add_checkbox('${target}')" class="btn btn-primary">Submit</button>
  //   </div>
  // </div>
  //   )
  // }
  var add_checkbox = () => {
    console.log("add_checkbox called");
    debugger;
    htmldata = `<div class="checkbox">
      <label>`;
    if ($("#checkboxdefault").val() == "true") {
      htmldata +=
        `<input type="checkbox"checked name="` +
        $("#checkboxname").val() +
        `"> ${$("#checkboxlabel").val()} `;
    } else {
      htmldata +=
        `<input type="checkbox" name="` +
        $("#checkboxname").val() +
        `">  ${$("#checkboxlabel").val()}`;
    }
    htmldata += "</label></div>";
    handleClose();
    // $("#myModal").modal("toggle");
    $("#" + funcParam).append(htmldata);
  };
  const [funcParam, setFuncparam] = useState("");

  const link_add_checkbox = (target) => {
    setFuncparam(target);
    setHeader("Checkbox Property");

    // <button onClick={add_checkbox('`+target+`')} class="btn btn-primary">Submit</button>
    handleShow();
  };

  const link_add_date_input = (target) => {
    setFuncparam(target);
    setHeader("Date input Property");

    handleShow();
  };
  const add_date_input = () => {
    console.log("dd_date_input  called");
    htmldata =
      `<div class="form-group">
            <label>${$("#dateinputlabel").val()}</label>
            <input type="date" class="form-control" value="${$(
              "#dateinputdefault"
            ).val()}" name="` +
      $("#dateinputname").val() +
      `">
          </div>`;
    $("#myModal").modal("toggle");
    $("#" + funcParam).append(htmldata);
  };
  const link_add_dialog_next_page_button = (target) => {
    $("#modal_title").html("dialog next page button Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_add_drop_down = (target) => {
    $("#modal_title").html("Dropdown Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="deopdouwnname">Name</label>
            <input type="text" id="deopdouwnname" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="deopdouwnlabel">Label</label>
            <input type="text" id="deopdouwnlabel" class="form-control" placeholder="Label">
          </div>
          <div class="form-group">
            <label for="deopdouwndefault">Default</label>
            <input type="text" id="deopdouwndefault" class="form-control" placeholder="Default">
          </div>
          <div class="form-group">
            <label for="deopdouwndeoptions">Options</label>
            <input type="text" id="deopdouwndeoptions" class="form-control" placeholder="Options be like 'a,b,c...'">
          </div>
          <button onclick="add_drop_down('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_drop_down = (target) => {
    htmldata = `<div class="form-group">
            <label>${$("#deopdouwnlabel").val()}</label>
            <select name="${$("#deopdouwnname").val()}" class="form-control">`;
    let opt = $("#deopdouwndeoptions").val().split(",");
    opt.forEach((element) => {
      if ($("#deopdouwndefault").val() == element) {
        htmldata += "<option selected>" + element + "</option>";
      } else {
        htmldata += "<option>" + element + "</option>";
      }
    });

    htmldata += `</select>
          </div>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_file = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_add_file_input = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_add_files = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_add_heading = (target) => {
    $("#modal_title").html("Heading Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="headingname">Heading</label>
            <input type="text" id="headingname" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="headingsize">Size</label>
            <select id="headingsize" class="form-control">
              <option>Small</option>  
              <option selected>Medium</option>  
              <option>Large</option>  
            </select>
          </div>
          <button onclick="add_heading('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_heading = (target) => {
    if ($("#headingsize").val() == "Small") {
      htmldata = `<center><h5>${$("#headingname").val()}</h5></center>`;
    }
    if ($("#headingsize").val() == "Medium") {
      htmldata = `<center><h3>${$("#headingname").val()}</h3></center>`;
    }
    if ($("#headingsize").val() == "Large") {
      htmldata = `<center><h1>${$("#headingname").val()}</h1></center>`;
    }
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_hidden_input = (target) => {
    $("#modal_title").html("hidden input Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="hiddeninputname">Name</label>
            <input type="text" id="hiddeninputname" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="hiddeninputvalue">Value</label>
            <input type="text" id="hiddeninputvalue" class="form-control" placeholder="Value">
            
          </div>
          <button onclick="add_hidden_input('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_hidden_input = (target) => {
    htmldata = `<input type="hidden" name="${$("#hiddeninputname").val()}" value="${$(
      "#hiddeninputvalue"
    ).val()}">`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_icon = (target) => {
    $("#modal_title").html("Add icon Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="iconvariant">Variant</label>
            <select id="iconvariant" class="form-control">
              <option>Success</option>
              <option>Warning</option>
              <option>Failure</option>
            </select>
          </div>
          <div class="form-group">
            <label for="iconsize">Size</label>
            <input type="number" min=1 id="iconsize" class="form-control" placeholder="Value">
            
          </div>
          <button onclick="add_icon_input('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_icon_input = (target) => {
    if ($("#iconvariant").val() == "Success") {
      htmldata = `
      <span class="material-symbols-outlined" style="
          color: green;
          font-size: ${$("#iconsize").val()}px;
      ">
        done
      </span>
      `;
    }
    if ($("#iconvariant").val() == "Warning") {
      htmldata = `
      <span class="material-symbols-outlined" style="
          color: orange;
          font-size: ${$("#iconsize").val()}px;
      ">
        warning
      </span>
      `;
    }
    if ($("#iconvariant").val() == "Failure") {
      htmldata = `
      <span class="material-symbols-outlined" style="
          color: red;
          font-size: ${$("#iconsize").val()}px;
      ">
        close
      </span>
      `;
    }
    htmldata = `<center>${htmldata}</center>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_image = (target) => {
    $("#modal_title").html("Add Image Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="image_url_or_path">Path</label>
            <input type="text" id="image_url_or_path" class="form-control" placeholder="Path">
          </div>
          <div class="form-group">
            <label for="image_width">Width</label>
            <input type="number" min=1 id="image_width" class="form-control" placeholder="Width">
          </div>
          <div class="form-group">
            <label for="image_height">Height</label>
            <input type="number" min=1 id="image_height" class="form-control" placeholder="Height">
            
          </div>
          <button onclick="add_image('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_image = (target) => {
    htmldata = `<img src="${$("#image_url_or_path").val()}" alt="${$(
      "#image_url_or_path"
    ).val()}" width="${$("#image_width").val()}" height="${$("#image_height").val()}">`;
    htmldata = `<center>${htmldata}</center>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_link = (target) => {
    $("#modal_title").html("Add Link Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="link_url">URL</label>
            <input type="text" id="link_url" class="form-control" placeholder="URL">
          </div>
          <div class="form-group">
            <label for="link_label">Label</label>
            <input type="text" id="link_label" class="form-control" placeholder="Label">
          </div>
          <button onclick="add_link('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_link = (target) => {
    htmldata = `
    <a href="${$("#link_url").val()}" target="_blank"  style="
display: flex;
align-items: center;
">
      <div><span class="material-symbols-outlined">
    open_in_new
    </span></div>
      ${$("#link_label").val()}</a>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_password_input = (target) => {
    $("#modal_title").html("Add Password Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="password_name">Name</label>
            <input type="text" id="password_name" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="password_label">Lable</label>
            <input type="text" id="password_label" class="form-control" placeholder="Label">
          </div>
          <div class="form-group">
            <label for="password_placeholder">Placeholder</label>
            <input type="text" id="password_placeholder" class="form-control" placeholder="Label">
          </div>
          
          <button onclick="add_password('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_password = (target) => {
    htmldata =
      `<div class="form-group">
            <label>${$("#password_label").val()}</label>
            <input type="password" class="form-control" placeholder='${$(
              "#password_placeholder"
            ).val()}' name="` +
      $("#password_name").val() +
      `">
          </div>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_radio_buttons = (target) => {
    $("#modal_title").html("Add Radio Button Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="radio_buttons_name">Name</label>
            <input type="text" id="radio_buttons_name" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="radio_buttons_label">Label</label>
            <input type="text" id="radio_buttons_label" class="form-control" placeholder="Label">
          </div>
          <div class="form-group">
            <label for="radio_buttons_default">Default</label>
            <input type="text" id="radio_buttons_default" class="form-control" placeholder="Default">
          </div>
          <div class="form-group">
            <label for="radio_buttons_deoptions">Options</label>
            <input type="text" id="radio_buttons_deoptions" class="form-control" placeholder="Options be like 'a,b,c...'">
          </div>
          <button onclick="add_radio_buttons('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_radio_buttons = (target) => {
    htmldata = `<div class="form-group">`;
    let opt = $("#radio_buttons_deoptions").val().split(",");
    opt.forEach((element) => {
      if ($("#radio_buttons_default").val() == element) {
        htmldata += `<input type="radio" id="${element}" checked name="${$(
          "#radio_buttons_name"
        ).val()}" value="${element}">
  <label for="${element}">${element}</label><br>`;
      } else {
        htmldata += `<input type="radio" id="${element}" name="${$(
          "#radio_buttons_name"
        ).val()}" value="${element}">
  <label for="${element}">${element}</label><br>`;
      }
    });

    htmldata += `</div>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_submit_buttons = (target) => {
    $("#modal_title").html("Add Submit button Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="submit_buttons">Buttons</label>
            <input type="text" id="submit_buttons" class="form-control" placeholder="Button be like 'yes,no'">
          </div>
          <div class="form-group">
            <label for="submit_buttons_default">Default</label>
            <input type="text" id="submit_buttons_default" class="form-control" placeholder="Default">
          </div>
          <button onclick="add_submit_buttons('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_submit_buttons = (target) => {
    htmldata = `<div class="form-group" style="
display: flex;
justify-content: space-evenly;
">`;
    let opt = $("#submit_buttons").val().split(",");
    opt.forEach((element) => {
      if ($("#submit_buttons_default").val() == element) {
        htmldata += `<button type="button" class="btn btn-primary">${element}</button>`;
      } else {
        htmldata += `<button type="button" class="btn btn-default">${element}</button>`;
      }
    });

    htmldata += `</div>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_text = (target) => {
    $("#modal_title").html("Add Text Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="textvalue">Text</label>
            <input type="text" id="textvalue" class="form-control" placeholder="text">
          </div>
          <div class="form-group">
            <label for="textsize">Size</label>
            <select id="textsize" class="form-control">
              <option>Small</option>  
              <option selected>Medium</option>  
              <option>Large</option>  
            </select>
          </div>
          <button onclick="add_text('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_text = (target) => {
    htmldata = `<p style='font-size:${$("#textsize").val()}'>${$("#textvalue").val()}</p>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_add_text_input = (target) => {
    $("#modal_title").html("Add Text Input Property");
    $("#modal_body").html(`
    <div class="container-fluid">
        <div class="row">
          <div class="form-group">
            <label for="textinputname">Name</label>
            <input type="text" id="textinputname" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="textinputlabel">Label</label>
            <input type="text" id="textinputlabel" class="form-control" placeholder="Label">
          </div>
          <div class="form-group">
            <label for="textinputplaceholder">Plaseholder</label>
            <input type="text" id="textinputplaceholder" class="form-control" placeholder="Placeholder">
          </div>
          <div class="form-group">
            <label for="textinputrowe">Rows</label>
            <input type="number" min=1 id="textinputrowe" class="form-control" placeholder="Row">
          </div>
          <button onclick="add_text_input('${target}')" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
    $("#myModal").modal("toggle");
  };
  const add_text_input = (target) => {
    htmldata = `
    <div class="form-group">
            <label>${$("#textinputlabel").val()}</label>
    <textarea class="form-control" rows="${$("#textinputrowe").val()}" name="${$(
      "#textinputname"
    ).val()}" placeholder='${$("#textinputplaceholder").val()}'></textarea>
    </div>`;
    $("#myModal").modal("toggle");
    $("#" + target).append(htmldata);
  };
  const link_clear_elements = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_close_all_dialogs = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_close_dialog = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_run_dialog = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_show_dialog = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_wait_all_dialogs = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };
  const link_wait_dialog = (target) => {
    $("#modal_title").html("Checkbox Property");
    $("#modal_body").html("toggle");
    $("#myModal").modal("toggle");
  };

  const dragelement = (target, source) => {
    // eslint-disable-next-line default-case
    switch (source) {
      case "link_add_checkbox":
        link_add_checkbox(target);
        break;
      case "link_add_date_input":
        link_add_date_input(target);
        break;
      case "link_add_dialog_next_page_button":
        link_add_dialog_next_page_button(target);
        break;
      case "link_add_drop_down":
        link_add_drop_down(target);
        break;
      case "link_add_file":
        link_add_file(target);
        break;
      case "link_add_file_input":
        link_add_file_input(target);
        break;
      case "link_add_files":
        link_add_files(target);
        break;
      case "link_add_heading":
        link_add_heading(target);
        break;
      case "link_add_hidden_input":
        link_add_hidden_input(target);
        break;
      case "link_add_icon":
        link_add_icon(target);
        break;
      case "link_add_image":
        link_add_image(target);
        break;
      case "link_add_link":
        link_add_link(target);
        break;
      case "link_add_password_input":
        link_add_password_input(target);
        break;
      case "link_add_radio_buttons":
        link_add_radio_buttons(target);
        break;
      case "link_add_submit_buttons":
        link_add_submit_buttons(target);
        break;
      case "link_add_text":
        link_add_text(target);
        break;
      case "link_add_text_input":
        link_add_text_input(target);
        break;
      case "link_clear_elements":
        link_clear_elements(target);
        break;
      case "link_close_all_dialogs":
        link_close_all_dialogs(target);
        break;
      case "link_close_dialog":
        link_close_dialog(target);
        break;
      case "link_run_dialog":
        link_run_dialog(target);
        break;
      case "link_show_dialog":
        link_show_dialog(target);
        break;
      case "link_wait_all_dialogs":
        link_wait_all_dialogs(target);
        break;
      case "link_wait_dialog":
        link_wait_dialog(target);
    }
    // data = `<input type="text" name="test">`;
    // $("#" + target).append(htmldata);
  };
  const [header, setHeader] = React.useState("");
  const [div1, setDiv1] = React.useState("");
  const [body, setBody] = React.useState("");
  return (
    <div className="App">
      <div className="container">
        <div>
          {/* <h1>Hello from Modal</h1> */}
          {/* <Button color="danger" onClick={toggle} >Show</Button>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
          {/* <Button onClick={handleShow}>Show</Button> */}

          <Modal animation={false} show={show} id="myModal" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id="modal_title">{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body id="modal_body">
              {(() => {
                switch (header) {
                  case "Checkbox Property":
                    return (
                      <div class="container-fluid">
                        <div class="row">
                          <div class="form-group">
                            <label for="checkboxname">Name</label>
                            <input
                              type="text"
                              id="checkboxname"
                              class="form-control"
                              placeholder="Name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="checkboxlabel">Label</label>
                            <input
                              type="text"
                              id="checkboxlabel"
                              class="form-control"
                              placeholder="Label"
                            />
                          </div>
                          <div class="form-group">
                            <label for="checkboxdefault">Default</label>
                            <input
                              type="text"
                              id="checkboxdefault"
                              class="form-control"
                              placeholder="Default"
                            />
                          </div>
                          <button onClick={add_checkbox} class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    );

                  case "Date input Property":
                    return (
                      <div class="container-fluid">
                        <div class="row">
                          <div class="form-group">
                            <label for="dateinputname">Name</label>
                            <input
                              type="text"
                              id="dateinputname"
                              class="form-control"
                              placeholder="Name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="dateinputlabel">Label</label>
                            <input
                              type="text"
                              id="dateinputlabel"
                              class="form-control"
                              placeholder="Label"
                            />
                          </div>
                          <div class="form-group">
                            <label for="dateinputdefault">Default</label>
                            <input
                              type="date"
                              id="dateinputdefault"
                              class="form-control"
                              placeholder="Default"
                            />
                          </div>
                          <button onClick={add_date_input} class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    );

                  default:
                    return <h1>No Data Found</h1>;
                }
              })()}

              {/* <span dangerouslySetInnerHTML={{ __html: body }}></span> */}
            </Modal.Body>
          </Modal>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div id="div1" onDrop={drop} onDragOver={allowDrop}></div>
            <pre id="robotdata"></pre>
          </div>
          <div className="col-md-4">
            <div className="ps ps__active_y">
              <a
                id="link_add_checkbox"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_checkbox")}
                className=""
              >
                Add checkbox
              </a>
              <br />
              <a
                id="link_add_date_input"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_date_input")}
                className=""
              >
                Add Date Input
              </a>
              <br />
              <a
                id="link_add_dialog_next_page_button"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_dialog_next_page_button")}
                className=""
              >
                Add Dialog Next Page Button
              </a>
              <br />
              <a
                id="link_add_drop_down"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_drop_down")}
                className=""
              >
                Add drop_down
              </a>
              <br />
              <a
                id="link_add_file"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_file")}
                className=""
              >
                Add file
              </a>
              <br />
              <a
                id="link_add_file_input"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_file_input")}
                className=""
              >
                Add file input
              </a>
              <br />
              <a
                id="link_add_files"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_files")}
                className=""
              >
                Add files
              </a>
              <br />
              <a
                id="link_add_heading"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_heading")}
                className=""
              >
                Add heading
              </a>
              <br />
              <a
                id="link_add_hidden_input"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_hidden_input")}
                className=""
              >
                Add hidden input
              </a>
              <br />
              <a
                id="link_add_icon"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_icon")}
                className=""
              >
                Add icon
              </a>
              <br />
              <a
                id="link_add_image"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_image")}
                className=""
              >
                Add image
              </a>
              <br />
              <a
                id="link_add_link"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_link")}
                className=""
              >
                Add link
              </a>
              <br />
              <a
                id="link_add_password_input"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_password_input")}
                className=""
              >
                Add password input
              </a>
              <br />
              <a
                id="link_add_radio_buttons"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_radio_buttons")}
                className=""
              >
                Add radio buttons
              </a>
              <br />
              <a
                id="link_add_submit_buttons"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_submit_buttons")}
                className=""
              >
                Add submit buttons
              </a>
              <br />
              <a
                id="link_add_text"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_text")}
                className=""
              >
                Add text
              </a>
              <br />
              <a
                id="link_add_text_input"
                draggable="true"
                onDragStart={drag}
                onClick={() => dragelement("div1", "link_add_text_input")}
                className=""
              >
                Add text input
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body" id="modal_body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-default" data-dismiss="modal">Close</button> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
