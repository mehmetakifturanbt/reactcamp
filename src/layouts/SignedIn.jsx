import React from 'react'
import { Menu, Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://yt3.ggpht.com/ytc/AAUvwng9Ga_Yk-kUaSQIAepD1bMdF54ZXnDgwuCovK42_A=s900-c-k-c0x00ffffff-no-rj"/>
                <Dropdown pointing="top left" text="Akif">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>

                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
