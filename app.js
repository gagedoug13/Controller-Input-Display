window.addEventListener("gamepadconnected", () => {
    navigator.getGamepads()
    getInputs()
})

const getInputs = () => {
    setInterval(() => {
        const response = navigator.getGamepads()
        const allButtons = response[0].buttons
        const x = response[0].axes[0]
        const y = response[0].axes[1]
        const cButtons = [response[0].axes[2], response[0].axes[5]]

        console.log(allButtons)

        updateJoystick(x,y)
        updateButtons(allButtons)
        updateCameraButtons(cButtons)
        // console.log(allButtons)
        // console.log(x,y)
    }, 16)
}

const updateJoystick = (x,y) => {
    x = x * 15
    y = y * 15
    const joystick = document.querySelector(".joystick")
    const centerX = 58
    const centerY = 130
    
    joystick.style = `top: ${centerY + y}px; left: ${centerX + x}px; `
}

const updateButtons = (allButtons) => {
    for (button of allButtons) {
        if (document.querySelector(`#button${allButtons.indexOf(button)}`)) {
            if (button.pressed == true) {
                document.querySelector(`#button${allButtons.indexOf(button)}`).style = 
                `opacity: 1`
            } else {
             document.querySelector(`#button${allButtons.indexOf(button)}`).style = 
             `opacity: 0`
            }
        } else {
            continue
        }
    }
}

const updateCameraButtons = (cButtons) => {
    const cUp = document.getElementsByClassName('cUp')
    const cRight = document.getElementsByClassName('cRight')
    const cDown = document.getElementsByClassName('cDown')
    const cLeft = document.getElementsByClassName('cLeft')

    for (let i=0; i < cButtons.length; i++) {
        if (cButtons[i] == -1 && i == 0) {
            cUp[0].style = `opacity: 1`
        } else if (cButtons[i] == 1 && i == 0) {
            cDown[0].style = `opacity: 1`
        } else if (cButtons[1] == -1 && i == 1) {
            cLeft[0].style = `opacity: 1`
        } else if (cButtons[1] == 1 && i == 1) {
            cRight[0].style = `opacity: 1`
        }
    }
}

