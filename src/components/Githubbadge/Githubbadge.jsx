import React, { useState, useEffect } from "react";

const GitHubBadge = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Scroll to top visibility logic
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800">
                <div id="progressBar" className="h-full w-0 bg-white transition-all"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center">🏆 GitHub Achievements 🏆</h1>
                <img
                    src="https://user-images.githubusercontent.com/65187002/172940015-d9d072e7-c47d-4ddd-83f6-8e7717a721b8.png"
                    className="mx-auto w-24 h-24"
                    alt="Achievements Banner"
                />

                <h2 className="text-2xl font-semibold mt-6">📃 Achievement List 📃</h2>

                {/* Achievements Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-400 text-center">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-white">
                                <th className="p-2 border">Badge</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">How to get</th>
                                <th className="p-2 border">Needed amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Starstruck */}
                            <tr>
                                <td className="border p-2">
                                    <img
                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone1.png"
                                        width="60px"
                                        alt="Starstruck"
                                    />
                                </td>
                                <td className="border p-2">Starstruck</td>
                                <td className="border p-2">
                                    Create a repository with a lot of stars.
                                    <br />
                                    Check the{" "}
                                    <a href="https://github.com/sanjay-kv/Open-source-Practice" className="text-blue-500 hover:underline">
                                        Sample repo
                                    </a>
                                    <br />
                                    If you get the first 16 stars, you will unlock the badge.
                                    <br />
                                    <a href="https://youtu.be/v2Pai1TY_Lg" className="text-blue-500 hover:underline">
                                        Watch the Video Tutorial
                                    </a>
                                </td>
                                <td className="border p-2">
                                    <table className="w-full border border-gray-300">
                                        <thead>
                                            <tr>
                                                <th className="p-2 border">DEFAULT</th>
                                                <th className="p-2 border">BRONZE</th>
                                                <th className="p-2 border">SILVER</th>
                                                <th className="p-2 border">GOLD</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-2">
                                                    <img
                                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone1.png"
                                                        width="60px"
                                                        alt="Starstruck Default"
                                                    />
                                                </td>
                                                <td className="border p-2">
                                                    <img
                                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/StarStruck_Bronze.png"
                                                        width="60px"
                                                        alt="Starstruck Bronze"
                                                    />
                                                </td>
                                                <td className="border p-2">
                                                    <img
                                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/StarStruck_Silver.png"
                                                        width="60px"
                                                        alt="Starstruck Silver"
                                                    />
                                                </td>
                                                <td className="border p-2">
                                                    <img
                                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/StarStruck_Gold.png"
                                                        width="60px"
                                                        alt="Starstruck Gold"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2">16</td>
                                                <td className="border p-2">128</td>
                                                <td className="border p-2">512</td>
                                                <td className="border p-2">4096</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            {/* Quickdraw */}
                            <tr>
                                <td className="border p-2">
                                    <img
                                        src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone1.png"
                                        width="60px"
                                        alt="Quickdraw"
                                    />
                                </td>
                                <td className="border p-2">Quickdraw</td>
                                <td className="border p-2">
                                    Gitty up! If you closed an issue/pull request within 5 minutes of opening, you will unlock this badge.
                                </td>
                                <td className="border p-2">1</td>
                            </tr>
                            <tr>
    <td className="border p-2">
        <img
            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire.png"
            width="60px"
            alt="Pair Extraordinaire"
        />
    </td>
    <td className="border p-2 font-semibold">Pair Extraordinaire</td>
    <td className="border p-2 text-left">
        Coauthored commits on merged pull request <br />
        <span className="font-semibold">Requirement:</span> VSCode IDE (bit difficult to get) <br />
        You can raise a sample PR{" "}
        <a href="https://github.com/recodehive/Opensource-practice" className="text-blue-500 hover:underline">
            here
        </a>{" "}
        by adding to the existing README file and tag me <span className="font-semibold">@sanjay-kv</span>
        <br />
        <a href="https://youtu.be/BNKSlT8jLQ0" className="text-blue-500 hover:underline">
            Watch the Video Tutorial
        </a>
    </td>
    <td className="border p-2">
        <table className="w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-200">
                    <th className="p-2 border">DEFAULT</th>
                    <th className="p-2 border">BRONZE</th>
                    <th className="p-2 border">SILVER</th>
                    <th className="p-2 border">GOLD</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire.png"
                            width="60px"
                            alt="Pair Extraordinaire Default"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire_Bronze.png"
                            width="60px"
                            alt="Pair Extraordinaire Bronze"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire_Silver.png"
                            width="60px"
                            alt="Pair Extraordinaire Silver"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire_Gold.png"
                            width="60px"
                            alt="Pair Extraordinaire Gold"
                        />
                    </td>
                </tr>
                <tr className="text-center font-semibold">
                    <td className="border p-2">1</td>
                    <td className="border p-2">10</td>
                    <td className="border p-2">24</td>
                    <td className="border p-2">48</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <td className="border p-2">
        <img
            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pull-Shark/PNG/PullShark.png"
            width="60px"
            alt="Pull Shark"
        />
    </td>
    <td className="border p-2 font-semibold">Pull Shark</td>
    <td className="border p-2 text-left">
        Opened a pull request and it should be merged. <br />
        You can raise a sample PR{" "}
        <a href="https://github.com/recodehive/resume-pitch" className="text-blue-500 hover:underline">
            here
        </a>{" "}
        by adding to the existing README file and tag me <span className="font-semibold">@sanjay-kv</span>
        <br />
        <a href="https://youtu.be/7uKMWBFN2jQ" className="text-blue-500 hover:underline">
            Watch the Video Tutorial
        </a>
    </td>
    <td className="border p-2">
        <table className="w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-200">
                    <th className="p-2 border">DEFAULT</th>
                    <th className="p-2 border">BRONZE</th>
                    <th className="p-2 border">SILVER</th>
                    <th className="p-2 border">GOLD</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pull-Shark/PNG/PullShark.png"
                            width="60px"
                            alt="Pull Shark Default"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pull-Shark/PNG/PullShark_Bronze.png"
                            width="60px"
                            alt="Pull Shark Bronze"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pull-Shark/PNG/PullShark_Silver.png"
                            width="60px"
                            alt="Pull Shark Silver"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Pull-Shark/PNG/PullShark_Gold.png"
                            width="60px"
                            alt="Pull Shark Gold"
                        />
                    </td>
                </tr>
                <tr className="text-center font-semibold">
                    <td className="border p-2">2</td>
                    <td className="border p-2">16</td>
                    <td className="border p-2">128</td>
                    <td className="border p-2">1024</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
<tr>
    <td className="border p-2">
        <img
            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Galaxy-Brain/PNG/GalaxyBrain.png"
            width="60px"
            alt="Galaxy Brain"
        />
    </td>
    <td className="border p-2 font-semibold">Galaxy Brain</td>
    <td className="border p-2 text-left">
        Answered a discussion and someone marked your reply as an answer. <br />
        You can answer some of the discussions{" "}
        <a href="https://github.com/orgs/recodehive/discussions" className="text-blue-500 hover:underline">
            here
        </a>
        <br />
        <a href="https://youtu.be/v2Pai1TY_Lg" className="text-blue-500 hover:underline">
            Watch the Video Tutorial
        </a>
    </td>
    <td className="border p-2">
        <table className="w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-200">
                    <th className="p-2 border">DEFAULT</th>
                    <th className="p-2 border">BRONZE</th>
                    <th className="p-2 border">SILVER</th>
                    <th className="p-2 border">GOLD</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Galaxy-Brain/PNG/GalaxyBrain.png"
                            width="60px"
                            alt="Galaxy Brain Default"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Galaxy-Brain/PNG/GalaxyBrain_Bronze.png"
                            width="60px"
                            alt="Galaxy Brain Bronze"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Galaxy-Brain/PNG/GalaxyBrain_Silver.png"
                            width="60px"
                            alt="Galaxy Brain Silver"
                        />
                    </td>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Galaxy-Brain/PNG/GalaxyBrain_Gold.png"
                            width="60px"
                            alt="Galaxy Brain Gold"
                        />
                    </td>
                </tr>
                <tr className="text-center font-semibold">
                    <td className="border p-2">2</td>
                    <td className="border p-2">8</td>
                    <td className="border p-2">16</td>
                    <td className="border p-2">32</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>
{/* YOLO Badge */}
<tr>
    <td className="border p-2">
        <img
            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/YOLO/PNG/YOLO_Badge.png"
            width="60px"
            alt="YOLO"
        />
    </td>
    <td className="border p-2 font-semibold">YOLO</td>
    <td className="border p-2 text-left">
        <div>Merged a pull request without a review</div>
        <div>
            You can raise a PR{" "}
            <a href="https://github.com/recodehive/machine-learning-repos" className="text-blue-500 hover:underline">
                here
            </a>
        </div>
        <div>
            <a href="https://youtu.be/GnHNScuGKrg" className="text-blue-500 hover:underline">
                Watch the Video Tutorial
            </a>
        </div>
    </td>
    <td className="border p-2">
        <table className="w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-200">
                    <th className="p-2 border">DEFAULT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/YOLO/PNG/YOLO_Badge.png"
                            width="60px"
                            alt="YOLO Default"
                        />
                    </td>
                </tr>
                <tr className="text-center font-semibold">
                    <td className="border p-2">1</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>

{/* Public Sponsor Badge */}
<tr>
    <td className="border p-2">
        <img
            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png"
            width="60px"
            alt="Public Sponsor"
        />
    </td>
    <td className="border p-2 font-semibold">Public Sponsor</td>
    <td className="border p-2 text-left">
        <a href="https://github.com/sponsors" className="text-blue-500 hover:underline">
            GitHub Sponsors
        </a>
        <br />
        <a href="https://youtu.be/dcdpkD7lYDg" className="text-blue-500 hover:underline">
            Watch the Video Tutorial
        </a>
    </td>
    <td className="border p-2">
        <table className="w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-200">
                    <th className="p-2 border">DEFAULT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border p-2">
                        <img
                            src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png"
                            width="60px"
                            alt="Public Sponsor Default"
                        />
                    </td>
                </tr>
                <tr className="text-center font-semibold">
                    <td className="border p-2">1</td>
                </tr>
            </tbody>
        </table>
    </td>
</tr>


                            {/* Add more badges here as needed */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-4 right-4 bg-gray-900 text-white p-3 rounded-full shadow-md transition-transform hover:scale-110"
                >
                    ⬆️
                </button>
            )}
        </div>
    );
};

export default GitHubBadge;
