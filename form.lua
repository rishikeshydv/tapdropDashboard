-- i want to create a form with a submit button, upon clicking on submit, i want to send a post request to an API

local http = require("socket.http")
local ltn12 = require("ltn12")
local json = require("json")

-- Function to handle the form submission
local function submitForm()
    -- Get the form data
    local formData = {
        name = "John Doe",
        email = "johndoe@example.com"
        -- Add more form fields as needed
    }
    
    -- Convert the form data to JSON
    local jsonData = json.encode(formData)
    
    -- Set the API endpoint URL
    local url = "https://api.example.com/submit"
    
    -- Set the request headers
    local headers = {
        ["Content-Type"] = "application/json",
        ["Content-Length"] = #jsonData
    }
    
    -- Send the POST request
    local response = {}
    local result, status = http.request{
        url = url,
        method = "POST",
        headers = headers,
        source = ltn12.source.string(jsonData),
        sink = ltn12.sink.table(response)
    }
    
    -- Check the response status
    if status == 200 then
        print("Form submitted successfully!")
        -- Handle the response data if needed
    else
        print("Failed to submit form. Status code: " .. status)
        -- Handle the error if needed
    end
end

-- Create the form
local form = display.newGroup()

-- Create the form fields (e.g., text fields, checkboxes, etc.)

-- Create the submit button
local submitButton = display.newRect(0, 0, 100, 40)
submitButton.x = display.contentCenterX
submitButton.y = display.contentHeight - 50
submitButton:setFillColor(0.5, 0.5, 0.5)

-- Add an event listener to the submit button
submitButton:addEventListener("tap", submitForm)
