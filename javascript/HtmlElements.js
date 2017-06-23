function buildCheckboxPanel(id, displayname) { 
    return "<div class='panel-group'>" +
                "<div class='panel panel-primary'>" +
                    "<div class='panel-heading'>" +
                    "<h4 class='panel-title'>" +
                    "<a data-toggle='collapse' href='#"+id+"'>"+displayname+"</a>" +
                    "</h4>" +
                    "</div>" +
                    "<div id='" + id + "' class='panel-collapse collapse'>" +

                    "</div>" +
                "</div>" +
            "</div>";
}

function buildCheckboxPanelSub(id, displayname) { 
    return "<div class='panel-group'>" +
                "<div class='panel panel-default'>" +
                    "<div class='panel-heading'>" +
                    "<h4 class='panel-title'>" +
                    "<a data-toggle='collapse' href='#"+id+"'>"+displayname+"</a>" +
                    "</h4>" +
                    "</div>" +
                    "<div id='" + id + "' class='panel-collapse collapse'>" +

                    "</div>" +
                "</div>" +
            "</div>";
}

function buildPanelWithImages(id) {
    return "<div id='" + id + "' class='tab-pane fade extandable-tab-list-element'>" +
    "<div class='row'>" +
        "<div class='col-md-6'>" +
            "<div class='panel panel-default'>" +
                "<div class='panel-heading'>" +
                    "<div class='row'>" +
                        "<div class='col-md-6'>" +
                        "Reference" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='panel-body refCol'></div>" +
                "</div>"+
            "</div>" +
            "<div class='col-md-6'>" +
                "<div class='panel panel-default'>" +
                    "<div class='panel-heading'>" +
                        "<div class='row'>" +
                            "<div class='col-md-6'>" +
                            "Current" +
                            "</div>" +
                        "<div class='col-md-6 currColRightHeading'>" +
                        "<input type='checkbox' class='toggleDifferenceView' id='toggle"+id+"' style='display: none;'>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='panel-body currCol'></div>" +
                "<div class='panel-body diffCol'></div>" +
                "</div>"+
            "</div>" +

        "</div>" +

                "<div class='viewType'>" +
                    "<div class='small'>Choose Diff</div>" +
                        "<div class='btn-group btn-group-sm' role='group' id='diffButtonGroup'>" +
                            "<button type='button' class='btn btn-primary disableDiffImg' toToggle='toggle"+id+"'> Disabled </button>" +
                            "<button type='button' class='btn enableDiffImg' toToggle='toggle"+id+"'> Enabled </button>" +
                        "</div>" +
                    "</div>" +

    "</div>";
}

function buildPanelWithText(id) {
    return "<div id='" + id + "' class='tab-pane fade extandable-tab-list-element'>" +
            "<div class='row'>" +
                "<div class='col-md-6'>" +
                    "<div class='panel panel-default'>" +
                        "<div class='panel-heading'>" +
                            "<div class='row'>" +
                                "<div class='col-md-6'>" +
                                   "Reference " +
                                    "<button type='button' class='btn btn-xs toggleTextarea' totoggle='#ref"+id+"' ><i class='glyphicon glyphicon-menu-up'></i></button>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='panel-body'>" +  "<textarea id='ref"+id+"' readonly></textarea>" +
                        "</div>" +
                    "</div>"+
                "</div>" +

                "<div class='col-md-6'>" +
                    "<div class='panel panel-default'>" +
                        "<div class='panel-heading'>" +
                            "<div class='row'>" +
                                "<div class='col-md-6'>" +
                                "Current " +
                                "<button type='button' class='btn btn-xs toggleTextarea' totoggle='#curr"+id+"' ><i class='glyphicon glyphicon-menu-up'></i></button>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='panel-body'>" +  "<textarea id='curr"+id+"' readonly></textarea>" +
                        "</div>" +
                    "</div>"+
                "</div>" +

                "<div class='viewType'>" +
                    "<div class='small'>Choose Diff</div>" +
                        "<div class='btn-group btn-group-sm' role='group' id='diffButtonGroup'>" +
                            "<button type='button' id='noneDiffButton'   class='btn btn-primary' onclick='hideDiff(\"true\",\""+id+"\");'> Disabled </button>" +
                            "<button type='button' id='sideDiffButton'   class='btn' onclick='diffUsingJS(0,\""+id+"\");'> Side by Side</button>" +
                            "<button type='button' id='inlineDiffButton' class='btn' onclick='diffUsingJS(1,\""+id+"\");'> Combined Inline</button>" +
                        "</div>" +
                    "</div>" +
                "<div id='diff"+id+"'> </div>" +
            "</div>";
}
