# Banner Attendance Mass Y

Automatically sets all **Attendance** dropdowns to **Y** on Ellucian Banner
Attendance Reporting pages.

## What it does
- Selects **Y** for every Attendance field
- Requires manual clicking of **Save**

## Requirements
- Tampermonkey (Chrome, Firefox, Edge)

## Installation
1. Install Tampermonkey.
2. Create a new userscript.
3. Paste the contents of `mass-y.user.js` if it is not detected automatically.
4. Save the script.

## Usage
1. Open the Attendance Reporting page.
2. Wait for the page to load.
3. Verify Attendance fields are set to **Y**.
4. Manually enter your **N**'s and **S**'s along with their last date attended
5. Click **Save**.

## Alternative

Paste the following as a bookmark in your preferred browser:

```javascript
javascript:(()=>{document.querySelectorAll('select').forEach(s=>{if([...s.options].some(o=>o.text==='Y')){s.value='Y';s.dispatchEvent(new Event('change',{bubbles:true}));}});})();
