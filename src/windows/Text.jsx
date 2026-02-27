import {WindowControls} from "#components/index.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>
            <div className="text-file-content p-6 overflow-y-auto h-full bg-white select-text">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                )}
                {subtitle && (
                    <p className="text-xl font-semibold mb-4 text-gray-800">{subtitle}</p>
                )}
                <div className="space-y-4">
                    {description && description.map((para, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
