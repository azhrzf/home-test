import BasicWrapper from "@/components/common/layout/BasicWrapper";
import DefaultContainer from "@/components/common/layout/DefaultContainer";
import ProfileInfoRow from "@/components/feature/user-profile/profile-info-row";

export default function UserProfilePage() {
    return (
        <BasicWrapper>
            <DefaultContainer className="flex-grow flex flex-col items-center justify-center">
                <div className="w-[400px] flex-grow flex flex-col items-center justify-center px-4 py-6 space-y-9">
                    <h2 className="text-xl font-semibold text-slate-900">User Profile</h2>
                    <div className="w-full flex flex-col items-center space-y-6">
                        <div className="flex justify-center items-center rounded-full w-[68px] h-[68px] bg-blue-200">
                            <p className="text-blue-900 text-2xl">J</p>
                        </div>
                        <div className="w-full space-y-3">
                            <ProfileInfoRow label="Username" value="James Dean" />
                            <ProfileInfoRow label="Password" value="Admin123" />
                            <ProfileInfoRow label="Role" value="User" />
                        </div>
                    </div>
                </div>
            </DefaultContainer>
        </BasicWrapper>
    );
}
