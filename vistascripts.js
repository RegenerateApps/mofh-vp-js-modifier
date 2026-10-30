
/**
 * VistaPanel Utility Scripts
 *
 * Original authors:
 * SpookyKipper - https://github.com/SpookyKipper
 * Deveroonie - https://github.com/Deveroonie
 *
 * Refactored for readability, reliability, and maintainability.
 */

"use strict";

// ========================================
// PAGE UTILITIES
// ========================================

const urlParams_vpscriptsjs = new URLSearchParams(
    window.location.search
);

function GetPageInfo() {
    return urlParams_vpscriptsjs.get("option");
}

function GetVpUsername() {
    return document.getElementById("lblUserNameTxt")
        ?.textContent?.trim() ?? "";
}

// ========================================
// PHP VERSION MANAGEMENT
// ========================================

function SetPhpVersion(version) {
    if (GetPageInfo() !== "accountsettings") return;

    const phpVersionCell = document.querySelector(
        "#content > div > table.table > tbody > tr:nth-child(29) > td:nth-child(2)"
    );

    if (!phpVersionCell) {
        console.warn("PHP version element not found.");
        return;
    }

    phpVersionCell.textContent = String(version);
}

// ========================================
// SSL PAGE CUSTOMIZATION
// ========================================

function SetSslPageText(text) {
    if (GetPageInfo() !== "sslconfigure") return;

    const alertBox = document.querySelector(
        "#content > div > div"
    );

    if (!alertBox) {
        console.warn("SSL alert container not found.");
        return;
    }

    const alertIcon = alertBox.querySelector("span");
    const alertText = alertBox.querySelector("div");

    alertBox.classList.replace(
        "alert-warning",
        "alert-info"
    );

    if (alertIcon) {
        alertIcon.classList.replace(
            "glyphicon-exclamation-sign",
            "glyphicon-info-sign"
        );
    }

    if (alertText) {
        alertText.textContent = String(text);
    }
}

// ========================================
// LOGO MANAGEMENT
// ========================================

function GetVpLogoImage() {
    return document.getElementById("imgLogo")?.src ?? "";
}

function SetVpLogoImage(imageUrl) {
    const logo = document.getElementById("imgLogo");

    if (!logo) {
        console.warn("VistaPanel logo not found.");
        return;
    }

    logo.src = imageUrl;
}

// ========================================
// ELEMENT MANAGEMENT
// ========================================

function SetElementDetails(feature, value, property, groups) {
    const allowedProperties = [
        "url",
        "itemdesc",
        "searchtext"
    ];

    if (!allowedProperties.includes(property)) {
        console.warn(`Invalid property: ${property}`);
        return;
    }

    if (!Array.isArray(groups)) return;

    for (const group of groups) {
        for (const item of group.items ?? []) {
            if (item.feature === feature) {
                item[property] = value;
            }
        }
    }
}

function HideElementDetails(feature, groups) {
    if (!Array.isArray(groups)) return;

    for (const group of groups) {
        for (const item of group.items ?? []) {
            if (item.feature !== feature) continue;

            const element = document.getElementById(item.id);

            if (element) {
                element.style.display = "none";
            }
        }
    }
}

// ========================================
// SIDEBAR MANAGEMENT
// ========================================


function HideSidebar() {
    const sidebar = document.getElementById("sidebar");

    if (!sidebar) {
        console.warn("Sidebar element not found.");
        return;
    }

    sidebar.style.display = "none";
}


// ========================================
// VISTAPANEL VERSION API
// ========================================

async function GetVpVersion() {
    const endpoint =
        "https://panel.myownfreehost.net/xml-api/version.php";

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(
                `Request failed with status ${response.status}`
            );
        }

        return await response.text();

    } catch (error) {
        console.error(
            "Failed to retrieve VistaPanel version:",
            error
        );

        throw error;
    }
}

// ========================================
// STYLESHEET LOADER
// ========================================

function LoadStylesheet(url) {
    if (!url || typeof url !== "string") {
        console.warn("Invalid stylesheet URL.");
        return;
    }

    const existingStylesheet = Array.from(
        document.querySelectorAll('link[rel="stylesheet"]')
    ).some(link => link.href === new URL(url, document.baseURI).href);

    if (existingStylesheet) return;

    const stylesheet = document.createElement("link");

    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = url;

    document.head.appendChild(stylesheet);
}
