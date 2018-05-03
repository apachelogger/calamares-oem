var plasma = getApiVersion(1);
/*
org.kde.plasma-desktop.defaultPanel
var template = loadTemplate('org.kde.plasma-desktop.findWidgets')


panels().forEach(function(panel) {
    panel.remove()
})

sleep(2500)

var panel = loadTemplate('org.kde.plasma.desktop.defaultPanel')

sleep(2500)

panels().forEach(function(panel) {
    panel.widgets().forEach(function(widget) {
        var type = widget.type
        print("----")
        print(type)
        if (type === 'org.kde.plasma.kickoff') {
            widget.remove()
            return
        }
        if (type !== 'org.kde.plasma.systemtray') {
            return
        }
        print("!!!!!!!!1 system tray")
        widget.currentConfigGroup = new Array('General')
        print(widget.configGroups)
        print(widget.globalConfigGroups)
        print(widget.currentConfigGroup)
        print(widget.currentGlobalConfigGroup)
        // systray
        widget.writeConfig("ShowApplicationStatus", false)
        widget.writeConfig("ShowCommunicationStatus", false)
        widget.writeConfig("ShowUnknownStatus", false)
        widget.writeConfig("alwaysShown", "org.kde.plasma.networkmanagement")
        widget.reloadConfig()
//         widget.alwaysShown = org.kde.plasma.networkmanagement
    })
})*/


var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "showToolbox": "false"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

sleep(2500) // avoid timing crashes

// Add a panel for now. Calamares has no means to configure networking
// so we provide a bit of a stop-gap measure by having a panel with the
// bare minimum to do network management. Sucks a bit but oh well.
var panel = new Panel
panel.location = 'bottom'
panel.addWidget('org.kde.plasma.taskmanager')
panel.addWidget('org.kde.plasma.networkmanagement')

sleep(2500) // avoid timing crashes
